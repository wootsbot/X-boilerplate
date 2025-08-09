import type * as React from "react";

import { Navbar } from "#/components/layout/navbar";

function MarketingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col px-4 mx-4 mt-24 max-w-7xl sm:mx-auto">{children}</main>
    </>
  );
}

export default MarketingLayout;
