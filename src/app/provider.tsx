"use client";

import "@/libs/axios/config";

import { Toaster } from "@design-system/toast";
import type * as React from "react";
import { WelcomeToast } from "@/components/welcome-toast";
import { ReactQueryClientProvider } from "@/libs/react-query";

export const Provider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      {children}
      <Toaster position="top-center" offset={10} />
      <WelcomeToast />
    </ReactQueryClientProvider>
  );
};
