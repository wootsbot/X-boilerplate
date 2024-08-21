'use client';

import '@/libs/i18n/init';
import '@/libs/axios/config';

import * as React from 'react';

import { Toaster } from '@design-system/toast';

import { ReactQueryClientProvider } from '@/libs/react-query';

const Providers: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ReactQueryClientProvider>
      {children}
      <Toaster position="top-center" offset={10} />
    </ReactQueryClientProvider>
  );
};

export default Providers;
