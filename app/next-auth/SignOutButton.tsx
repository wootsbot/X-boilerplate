'use client';

import { signOut } from 'next-auth/react';

import Button from '@design-system/Button';

function SignOutButton() {
  return <Button onClick={() => signOut()}>SignOut</Button>;
}

export default SignOutButton;
