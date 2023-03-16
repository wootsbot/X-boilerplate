import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';

import { authOptions } from '@/libs/nextAuth';

import SignInProviderButton from './SignInProviderButton';
import SignOutButton from './SignOutButton';

import Header from '@/components/Header';
import SessionStatus from '@/server-components/SessionStatus.server';

async function NextAuthPage() {
  const session = await getServerSession(authOptions);
  const providers = (await getProviders()) ?? [];

  console.log('session', { session });
  console.log('providers', { providers });

  return (
    <div>
      <Header
        avatarUrl={session?.user?.image as string}
        title="🛡️"
        subTitle="Hi"
        name={session?.user?.name ?? 'NextAuth.js'}
        message="Authentication for Next.js, Live Demo."
      />

      {/*https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components */}
      {/* @ts-expect-error Async Server Component */}
      <SessionStatus />

      {session?.user && <SignOutButton />}

      {!session?.user &&
        Object.values(providers).map((provider) => (
          <div key={provider?.name}>
            <SignInProviderButton provider={provider} />
          </div>
        ))}
    </div>
  );
}

export default NextAuthPage;
