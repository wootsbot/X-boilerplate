import type { AppProps } from 'next/app';
import Head from 'next/head';

import { NextPageLayout } from '@/utils/types';

import StoreProvider from '@/store/StoreProvider';

// Config mocks servers and browser with msw
if (process.env.NEXT_PUBLIC_MSW_MOCKING === 'enabled') {
  require('../../mocks/msw-config');
}

type AppPropsLayout = AppProps & {
  Component: NextPageLayout;
};

function MyApp({ Component, pageProps }: AppPropsLayout) {
  // propagation and hydration is more beneficial if we mount the layout at this cycle
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>X Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StoreProvider>{getLayout(<Component {...pageProps} />)}</StoreProvider>
    </>
  );
}

export default MyApp;
