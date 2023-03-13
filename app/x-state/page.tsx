'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import Button from '@design-system/Button';

import { useDogStateService, useSelectedDogState } from '@/machines/dog/dog.machine';
import { selectorGetDog, selectorGetDogLoading } from '@/machines/dog/dog.selectors';

import { NextPageLayout } from '@/utils/types';

import Header from '@/components/Header';
import MainLayout from '@/layouts/MainLayout';

const XstatePage: NextPageLayout = () => {
  const router = useRouter();

  const dogStateService = useDogStateService();
  const getDogLoading = useSelectedDogState(selectorGetDogLoading);
  const dog = useSelectedDogState(selectorGetDog);

  function handleGetDog() {
    dogStateService.send({ type: 'GET_DOG_FETCH' });
  }

  function handleResetDog() {
    dogStateService.send({ type: 'GET_DOG_RESET' });
  }

  function handleRetryDog() {
    dogStateService.send({ type: 'GET_DOG_RETRY' });
  }

  function handleGoBack() {
    router.push('/');
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header title="🍍" subTitle="Hi" name="X-State" message="Promise canine example." onGoBack={handleGoBack} />

      <div
        style={{
          marginTop: 24,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 24,
        }}
      >
        <Button style={{ marginRight: 8 }} onClick={handleGetDog}>
          {getDogLoading ? 'Loading...' : 'Get Dog data'}
        </Button>
        <Button style={{ marginRight: 8 }} onClick={handleResetDog}>
          Reset Dog data
        </Button>

        <Button style={{ marginRight: 8 }} onClick={handleRetryDog}>
          Retry Dog data
        </Button>
      </div>
      {getDogLoading && <div>Loading Image...</div>}
      {dog && (
        <Image style={{ borderRadius: 8 }} width={400} height={350} src={dog?.message as string} alt="Dog" priority />
      )}
    </div>
  );
};

XstatePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default XstatePage;
