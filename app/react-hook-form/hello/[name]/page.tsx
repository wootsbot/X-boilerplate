'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import { NextPageLayout } from '@/utils/types';

import Header from '@/components/Header';
import MainLayout from '@/layouts/MainLayout';

const HelloNamePage: NextPageLayout = ({ params }) => {
  const router = useRouter();

  const { name } = params;

  function handleGoBack() {
    router.push('/react-hook-form');
  }

  return (
    <Header
      title="🪂"
      subTitle="Hi"
      name={name as string}
      message="This is a test of NextJs dynamic routing."
      onGoBack={handleGoBack}
    />
  );
};

HelloNamePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HelloNamePage;
