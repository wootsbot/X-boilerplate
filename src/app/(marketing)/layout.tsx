import * as React from 'react';

import { Navbar } from '@/components/layout/navbar';

function MarketingLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default MarketingLayout;
