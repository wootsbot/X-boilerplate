import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';

import { authOptions } from '@/libs/auth';

import SignInProviderButton from './SignInProviderButton';
import SignOutButton from './SignOutButton';

import Header from '@/components/Header';
import SessionStatus from '@/components/session-status';

async function NextAuthPage() {
  const session = await getServerSession(authOptions);
  const providers = (await getProviders()) ?? [];

  return (
    <div>
      <Header
        avatarUrl={session?.user?.image as string}
        title="🛡️"
        subTitle="Hi"
        name={session?.user?.name ?? 'NextAuth.js'}
        message="Authentication for Next.js, Live Demo."
      />

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
