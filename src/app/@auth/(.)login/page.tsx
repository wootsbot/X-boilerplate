"use client";

import { useRouter } from "next/navigation";

import { LoginForm } from "#/components/auth/login-form";
import * as AuthLogin from "#/components/auth/login-modal";

export default function Page() {
  const router = useRouter();

  return (
    <AuthLogin.LoginModal onClose={() => router.back()}>
      <LoginForm />
    </AuthLogin.LoginModal>
  );
}
