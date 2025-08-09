"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "#/lib/auth/auth-client";

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
  const router = useRouter();

  return (
    <button
      type="button"
      className="px-4 py-1 border rounded-md border-stone-900"
      onClick={() => {
        signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/"); // redirect to login page
            },
          },
        });
      }}
    >
      Log Out
    </button>
  );
}

export function SignGithub() {
  return <SiGithub />;
}
