import { assign } from '@xstate/immer';
import { ContextFrom, EventFrom } from 'xstate';
import { createModel } from 'xstate/lib/model';

import { createXStateContext } from '@/libs/createXStateContext';

import { getCatsRequest } from './services';
import { CatsModel } from './types';

export const catsModel = createModel(
  {
    getCats: {
      data: [],
      errorMessage: null,
    } as CatsModel,
  },
  {
    events: {
      GET_CATS_FETCH: () => ({}),
      GET_CATS_RETRY: () => ({}),
      GET_CATS_RESET: () => ({}),
    },
  },
);

export type CatsContext = ContextFrom<typeof catsModel>;
export type CatsEvent = EventFrom<typeof catsModel>;

const getCatsReset = catsModel.assign(
  {
    getCats: catsModel.initialContext.getCats,
  },
  'GET_CATS_RESET', // Restricts the `event` allowed by the "GET_CATS_RESET" action
);

export const catsStateMachine = catsModel.createMachine(
  {
    id: 'get-cats-machine',
    context: catsModel.initialContext,
    initial: 'start',
    states: {
      start: {},
      getCats: {
        initial: 'start',
        states: {
          start: {},
          loading: {
            invoke: {
              id: 'get-cats-machine-invoke',
              src: 'getCatsService',
              onDone: {
                target: 'loaded',
                actions: assign((context, event) => {
                  context.getCats.data = event.data ?? [];
                }),
              },
              onError: {
                target: 'failure',
                actions: assign((context, event) => {
                  context.getCats.errorMessage = event.data;
                  context.getCats.data = [];
                }),
              },
            },
          },
          loaded: {},
          failure: {},
        },
      },
    },
    on: {
      GET_CATS_FETCH: {
        target: 'getCats.loading',
      },
      GET_CATS_RETRY: {
        target: 'getCats.loading',
      },
      GET_CATS_RESET: {
        target: 'getCats.start',
        actions: getCatsReset,
      },
    },
  },
  {
    services: {
      getCatsService: () => getCatsRequest(),
    },
  },
);

export const [CatsStateProvider, useCatsStateService, useSelectedCatsState, createCatsStateSelector] =
  createXStateContext(catsStateMachine);
