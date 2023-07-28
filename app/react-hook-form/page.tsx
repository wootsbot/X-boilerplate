'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import { NextPageLayout } from '@/utils/types';

import Header from '@/components/header';
import HelloForm from '@/components/hello-form';

const XstatePage: NextPageLayout = () => {
  const router = useRouter();

  function handleGoToRouteHello(data: { name: string }) {
    router.push(`/react-hook-form/hello/${data?.name}`);
  }

  function handleGoBack() {
    router.push('/');
  }

  return (
    <>
      <Header
        title="📄"
        subTitle="Hi "
        name="React-Hook-Form and Zod"
        message="An example with form validation and strict before going to the hello route."
        onGoBack={handleGoBack}
      />

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

export default XstatePage;
