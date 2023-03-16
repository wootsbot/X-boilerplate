'use client'

import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';

import Button from '@design-system/Button';

export type SignInProviderProps = {
  provider: ClientSafeProvider
}

function SignInProviderButton({ provider }: SignInProviderProps) {
  return (
    <Button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</Button>
  )
}

export default SignInProviderButton;
