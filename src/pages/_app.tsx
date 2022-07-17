import type { AppProps } from "next/app";

import StoreProvider from "@/store/StoreProvider";

// Config mocks servers and browser with msw
if (process.env.NEXT_PUBLIC_MSW_MOCKING === "enabled") {
  require("../../mocks/msw-config");
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
