'use client';

import * as React from 'react';

import Container from '@/components/Container';
import SocialContainer from '@/components/SocialContainer';
import StoreProvider from '@/store/StoreProvider';

type MainLayoutProps = {
  children?: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <>
            <main>
              <Container>{children}</Container>
            </main>
            <SocialContainer />
          </>
        </StoreProvider>
      </body>
    </html>
  );
}

export default MainLayout;
