import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import Button from '@design-system/Button';
import Typography from '@design-system/Typography';

import { NextPageLayout } from '@/utils/types';

import HelloForm from '@/components/HelloForm';
import XBoilerplate from '@/components/XBoilerplate';
import MainLayout from '@/layouts/MainLayout';

const HomePage: NextPageLayout = () => {
  const router = useRouter();

  function handleGoToRouteHello(data: { name: string }) {
    router.push(`/hello/${data?.name}`);
  }

  return (
    <>
      <XBoilerplate size={100} />
      <Typography as="h2" size="s">
        <em>A starting boilerplate with configuration and best practices for your Nextjs projects</em>
      </Typography>

      <Typography size="s">So you can only focus on developing your solutions.</Typography>

      <HelloForm onSubmit={handleGoToRouteHello} />

      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
