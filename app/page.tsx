/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

import Typography from '@design-system/Typography';

import FeatureCard from '@/components/FeatureCard';
import SessionStatus from '@/components/session-status';
import XBoilerplate from '@/components/XBoilerplate';

async function HomePage() {
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

      <div style={{ display: 'grid', gridGap: '24px', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <FeatureCard
          to="/x-state"
          title="🍍 State Management X-state"
          description="JavaScript and TypeScript finite state machines and statecharts for the modern web."
        />

        <FeatureCard
          to="/react-query"
          title="🌺 TanStack Query v4 (WIP)"
          description="TanStack Query (FKA React Query) it makes fetching, caching, synchronizing and updating server state in your web applications a breeze."
        />

        <FeatureCard
          to="/next-auth"
          title="🛡️ Authentication with NextAuth.js"
          description="NextAuth.js is a complete open-source authentication solution for Next.js applications."
        >
          <SessionStatus />
        </FeatureCard>

        <FeatureCard
          to="/react-hook-form"
          title="📄 Forms manager with react-hook-form and Zod"
          description="Performant, flexible and extensible forms with easy-to-use validation. and TypeScript-first schema
        validation with static type inference"
        />

        {/* <FeatureCard>
          <Typography as="h2">🔥 Mocking via msw</Typography>
          <Typography size="s">
            API mocking of the next generation. Mock by intercepting requests on the network level.
          </Typography>
        </FeatureCard> */}
      </div>
    </>
  );
}

export default HomePage;
