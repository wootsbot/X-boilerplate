import { useRouter } from 'next/router';
import * as React from 'react';

import Button from '@design-system/Button';
import Typography from '@design-system/Typography';

import { NextPageLayout } from '@/utils/types';

import MainLayout from '@/layouts/MainLayout';

const HelloNamePage: NextPageLayout = () => {
  const router = useRouter();
  const { name } = router.query;

  function handleGoBack() {
    router.push('/react-hook-form');
  }

  return (
    <>
      <h1>🪂</h1>

      <Typography as="h2" size="s">
        Hi {` `}
        <em>{name}</em>!
      </Typography>

      <Typography size="s">This is a test of NextJs dynamic routing.</Typography>

      <Button style={{ marginTop: '8px' }} onClick={handleGoBack}>
        Go back
      </Button>
    </>
  );
};

HelloNamePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HelloNamePage;
