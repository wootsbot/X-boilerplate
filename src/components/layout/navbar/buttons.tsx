"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { signOut } from "next-auth/react";

export function LoginButton() {
  return (
    <Link href="/login" aria-label="Log in">
      <button type="button" className="px-4 py-1 border rounded-md border-stone-900">
        Login
      </button>
    </Link>
  );
}

export function SignOutButton() {
  return (
    <button type="button" className="px-4 py-1 border rounded-md border-stone-900" onClick={() => signOut()}>
      Log Out
    </button>
  );
}

export function SignGithub() {
  return <SiGithub />;
}
