'use client';

import { signIn, signOut } from 'next-auth/react';

import Button from '@design-system/button';

export function SignOut() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}

export function SignIn() {
  return <Button onClick={() => signIn('github')}>Sign in with GitHub</Button>;
}
