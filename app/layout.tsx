import type { Metadata } from 'next';
import * as React from 'react';

import Providers from './Providers';

import Container from '@/components/container';
import SocialContainer from '@/components/social-container';

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: 'X Boilerplate',
    template: '%s | X Boilerplate',
  },
  description:
    'X-boilerplate a starting boilerplate with configuration and best practices for your Nextjs projects, so you can only focus on building your product.',
  openGraph: {
    title: 'X Boilerplate',
    description:
      'X-boilerplate a starting boilerplate with configuration and best practices for your Nextjs projects, so you can only focus on building your product.',
    url: 'https://beta-x-boilerplate.vercel.app',
    siteName: 'X Boilerplate',
    images: [
      {
        url: 'https://beta-x-boilerplate.vercel.app/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'X Boilerplate',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.svg',
  },
  // verification: {
  //   google: 'ID',
  //   yandex: 'yandex',
  // },
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>
            <Container>{children}</Container>
          </main>
          <SocialContainer />
        </Providers>
      </body>
    </html>
  );
}

export default MainLayout;
