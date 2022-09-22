import * as React from 'react';

import { useInterpret } from '@xstate/react';

import { catsStateMachine, CatsStateProvider } from '@/machines/cats/cats.machine';
import { dogStateMachine, DogStateProvider } from '@/machines/dog/dog.machine';

type PropsProvider = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: PropsProvider) => {
  const catsStateService = useInterpret(catsStateMachine);
  const dogStateService = useInterpret(dogStateMachine);

  return (
    <CatsStateProvider value={catsStateService}>
      <DogStateProvider value={dogStateService}>{React.Children.only(children)}</DogStateProvider>
    </CatsStateProvider>
  );
};

export default StoreProvider;
