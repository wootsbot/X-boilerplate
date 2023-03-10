import { useRouter } from 'next/router';
import * as React from 'react';

import { NextPageLayout } from '@/utils/types';

import Header from '@/components/Header';
import HelloForm from '@/components/HelloForm';
import MainLayout from '@/layouts/MainLayout';

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

XstatePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default XstatePage;
