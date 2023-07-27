'use client';

import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import StoreProvider from '@/store/StoreProvider';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5000 } },
});

const Providers: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <>{children}</>
      </StoreProvider>
      <ReactQueryDevtools initialIsOpen={false} />

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName="toast-container"
        containerStyle={{}}
        toastOptions={{
          className: 'toast',
          duration: 5000,
          style: {
            borderRadius: '8px',
          },
          icon: null,
          success: {
            style: {
              background: '#042f2e',
              borderColor: '#0f766e',
              borderWidth: 1,
              color: '#99f6e4',
            },
          },
          error: {
            style: {
              background: '#4c0519',
              borderColor: '#be123c',
              borderWidth: 1,
              color: '#fecdd3',
            },
          },
          loading: {
            style: {
              background: '#172554',
              borderColor: '#1d4ed8',
              borderWidth: 1,
              color: '#bfdbfe',
            },
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default Providers;
