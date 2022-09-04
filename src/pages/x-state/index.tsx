/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import Button from '@design-system/Button';
import Typography from '@design-system/Typography';
import { Xstate } from '@icons-pack/react-simple-icons';

import { NextPageLayout } from '@/utils/types';

import Container from '@/components/Container';
import FeatureCard from '@/components/FeatureCard';
import HelloForm from '@/components/HelloForm';
import XBoilerplate from '@/components/XBoilerplate';
import MainLayout from '@/layouts/MainLayout';

const XstatePage: NextPageLayout = () => {
  const router = useRouter();

  function handleGoToRouteHello(data: { name: string }) {
    router.push(`/x-state/hello/${data?.name}`);
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <HelloForm onSubmit={handleGoToRouteHello} />
      </div>
    </>
  );
};

XstatePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default XstatePage;
