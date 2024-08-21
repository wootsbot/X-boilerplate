import { Suspense } from 'react';

import { auth } from '@/libs/auth';

import * as Buttons from './buttons';

import { SessionStatus } from '@/components/auth/SessionStatus';
import Header from '@/components/header';

export default function NextAuthPage() {
  return (
    <div>
      <HeaderAuth />

      <Suspense fallback={<div>Loading...</div>}>
        <SessionStatus />
        <ButtonsForm />
      </Suspense>
    </div>
  );
}

async function ButtonsForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <Buttons.SignOut />
    </>
  ) : (
    <Buttons.SignIn />
  );
}

async function HeaderAuth() {
  let session = await auth();

  return (
    <Header
      avatarUrl={session?.user?.image as string}
      title="🛡️"
      subTitle="Hi"
      name={session?.user?.name ?? 'NextAuth.js'}
      message="Authentication for Next.js, Live Demo."
    />
  );
}
