import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';

import { NextPageLayout } from '@/utils/types';

import StoreProvider from '@/store/StoreProvider';

// Config mocks servers and browser with msw
if (process.env.NEXT_PUBLIC_MSW_MOCKING === 'enabled') {
  require('../mocks/msw-config');
}

interface AppPropsLayout extends AppProps {
  Component: NextPageLayout;
  pageProps: {
    session: Session;
  };
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsLayout) {
  // propagation and hydration is more beneficial if we mount the layout at this cycle
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>X Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StoreProvider>
        {Component.auth ? (
          <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
        ) : (
          getLayout(<Component {...pageProps} />)
        )}
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children }: { children: React.ReactNode }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default MyApp;
