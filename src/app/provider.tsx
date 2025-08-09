"use client";

import "#/lib/axios/config";

import type * as React from "react";
import { WelcomeToast } from "#/components/com/welcome-toast";
import { Toaster } from "#/components/ui/toast";
import { ReactQueryClientProvider } from "#/lib/react-query";

export const Provider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      {children}
      <Toaster position="top-center" offset={10} />
      <WelcomeToast />
    </ReactQueryClientProvider>
  );
};
