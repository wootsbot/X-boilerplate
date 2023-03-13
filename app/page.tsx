'use client';

//import { signIn } from 'next-auth/react';
//import { useSession } from 'next-auth/react';
import * as React from 'react';

import Typography from '@design-system/Typography';

import { NextPageLayout } from '@/utils/types';

import FeatureCard from '@/components/FeatureCard';
import XBoilerplate from '@/components/XBoilerplate';

const HomePage: NextPageLayout = () => {
  //const { status } = useSession();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 50,
        }}
      >
        <XBoilerplate size={100} />
        <Typography as="h2" size="s">
          <em>A starting boilerplate with configuration and best practices for your Nextjs projects.</em>
        </Typography>
        <Typography size="s">So you can only focus on building your product.</Typography>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Typography as="h2">Let's try the features live</Typography>
      </div>

      {/* <HelloForm onSubmit={handleGoToRouteHello} /> */}
      <div style={{ display: 'grid', gridGap: '24px', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <FeatureCard to="/x-state">
          <Typography as="h2">🍍 State Management X-state</Typography>
          <Typography size="s">
            JavaScript and TypeScript finite state machines and statecharts for the modern web.
          </Typography>
        </FeatureCard>

        <FeatureCard
        // onClick={() => signIn()}
        >
          <Typography as="h2">🛡️ Authentication with NextAuth.js</Typography>
          <Typography size="s">
            NextAuth.js is a complete open-source authentication solution for Next.js applications.
          </Typography>

          {/* {status === 'authenticated' && (
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography size="s">Already Authenticated</Typography>
              <div style={{ backgroundColor: '#46a758', width: 12, height: 12, borderRadius: 18, marginLeft: 8 }} />
            </div>
          )}

          {status === 'unauthenticated' && (
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography size="s">Unauthenticated</Typography>
              <div style={{ backgroundColor: '#e5484d', width: 12, height: 12, borderRadius: 18, marginLeft: 8 }} />
            </div>
          )} */}
        </FeatureCard>

        <FeatureCard to="/react-hook-form">
          <Typography as="h2">📄 Forms manager with react-hook-form and Zod</Typography>
          <Typography size="s">
            Performant, flexible and extensible forms with easy-to-use validation. and TypeScript-first schema
            validation with static type inference
          </Typography>
        </FeatureCard>

        {/* <FeatureCard>
          <Typography as="h2">🔥 Mocking via msw</Typography>
          <Typography size="s">
            API mocking of the next generation. Mock by intercepting requests on the network level.
          </Typography>
        </FeatureCard> */}
      </div>
    </>
  );
};

export default HomePage;
