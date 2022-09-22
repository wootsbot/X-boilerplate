import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

import Button from '@design-system/Button';
import ArrowLeftLine from '@design-system/icons/ArrowLeftLine';
import Typography from '@design-system/Typography';

import { useDogStateService, useSelectedDogState } from '@/machines/dog/dog.machine';
import { selectorGetDog, selectorGetDogLoading } from '@/machines/dog/dog.selectors';

import { NextPageLayout } from '@/utils/types';

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
      <h1>🐶</h1>

      <Typography as="h2" size="s">
        Hi {` `} X-State
      </Typography>

      <Typography size="s">Promise canine example.</Typography>

      <div
        style={{
          marginTop: 24,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 24,
        }}
      >
        <Button style={{ marginRight: 8 }} onClick={handleGoBack}>
          <ArrowLeftLine color="#fff" style={{ marginRight: 8 }} /> Go back
        </Button>
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
