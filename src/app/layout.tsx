import './globals.css';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import type { PropsWithChildren, ReactNode } from 'react';

import { GeistSans } from 'geist/font/sans';

import { Provider as RootProvider } from './provider';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Global.metadata');
  return {
    title: {
      default: t('title'),
      template: '%s | X Boilerplate',
    },
    description: t('description'),
    metadataBase: new URL('https://beta-x-boilerplate.vercel.app'),
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
};

export default async function RootLayout({
  children,
  auth,
}: PropsWithChildren<{
  auth: ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={GeistSans.variable}>
      <body className="bg-[#f2f0ed] text-[#0d0c0c]">
        <NextIntlClientProvider messages={messages}>
          <RootProvider>
            {children}
            {auth}
          </RootProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
