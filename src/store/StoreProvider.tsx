import * as React from "react";

import { useInterpret } from "@xstate/react";

import {
  catsStateMachine,
  CatsStateProvider,
} from "@/machines/cats/cats.machine";

type PropsProvider = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: PropsProvider) => {
  const catsStateService = useInterpret(catsStateMachine);

  return (
    <CatsStateProvider value={catsStateService}>
      {React.Children.only(children)}
    </CatsStateProvider>
  );
};

export default StoreProvider;
