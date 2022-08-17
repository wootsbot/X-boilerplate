import * as React from 'react';

import { MainLayoutProps } from './MainLayout.type';

import Container from '@/components/Container';
import SocialContainer from '@/components/SocialContainer';

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container>
      {children}
      <SocialContainer />
    </Container>
  );
}

export default MainLayout;
