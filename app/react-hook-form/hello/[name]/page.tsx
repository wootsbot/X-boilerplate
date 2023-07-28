'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import Header from '@/components/Header';

type HelloNamePageProps = {
  params: {
    name: String;
  };
};

function HelloNamePage({ params }: HelloNamePageProps) {
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
}

export default HelloNamePage;
