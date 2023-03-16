import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';

import { authOptions } from '@/libs/nextAuth';

import SignInProviderButton from './SignInProviderButton';

import Header from '@/components/Header';

async function NextAuthPage() {
  const session = await getServerSession(authOptions);
  const providers = (await getProviders()) ?? [];

  console.log('session', { session });
  console.log('providers', { providers });

  return (
    <div>
      <Header title="🛡️" subTitle="Hi" name="NextAuth.js" message="Authentication for Next.js, Live Demo." />

      {Object.values(providers).map((provider) => (
        <div key={provider?.name}>
          <SignInProviderButton provider={provider} />
        </div>
      ))}
    </div>
  );
}

export default NextAuthPage;
