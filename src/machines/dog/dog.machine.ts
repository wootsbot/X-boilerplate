import { assign } from '@xstate/immer';
import { createModel } from 'xstate/lib/model';

import { createXStateContext } from '@/libs/createXStateContext';

import { getDogRequest } from './services';
import { DogModel } from './types';

export const dogModel = createModel(
  {
    getDog: {
      data: null,
      errorMessage: null,
    } as DogModel,
  },
  {
    events: {
      GET_DOG_FETCH: () => ({}),
      GET_DOG_RETRY: () => ({}),
      GET_DOG_RESET: () => ({}),
    },
  },
);

const getDogReset = dogModel.assign(
  {
    getDog: dogModel.initialContext.getDog,
  },
  'GET_DOG_RESET',
);

export const dogStateMachine = dogModel.createMachine(
  {
    id: 'get-dog-machine',
    context: dogModel.initialContext,
    initial: 'idle',
    states: {
      idle: {},
      getDog: {
        initial: 'idle',
        states: {
          idle: {},
          loading: {
            invoke: {
              id: 'get-dog-machine-invoke',
              src: 'getDogService',
              onDone: {
                target: 'loaded',
                actions: assign((context, event) => {
                  context.getDog.data = event.data ?? null;
                }),
              },
              onError: {
                target: 'failure',
                actions: assign((context, event) => {
                  context.getDog.errorMessage = event.data;
                  context.getDog.data = null;
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
      GET_DOG_FETCH: {
        target: 'getDog.loading',
      },
      GET_DOG_RETRY: {
        target: 'getDog.loading',
      },
      GET_DOG_RESET: {
        target: 'getDog.idle',
        actions: getDogReset,
      },
    },
  },
  {
    services: {
      getDogService: () => getDogRequest(),
    },
  },
);

export const [DogStateProvider, useDogStateService, useSelectedDogState, createDogStateSelector] =
  createXStateContext(dogStateMachine);
