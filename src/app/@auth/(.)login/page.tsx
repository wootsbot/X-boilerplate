'use client';

import { useRouter } from 'next/navigation';

import * as AuthLogin from '@/components/auth/login-modal';
import { LoginForm } from '@/components/auth/login-form';

export default function Page() {
  const router = useRouter();

  return (
    <AuthLogin.LoginModal onClose={() => router.back()}>
      <LoginForm />
    </AuthLogin.LoginModal>
  );
}
