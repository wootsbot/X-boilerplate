"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "#/components/ui/button";
import { signIn } from "#/lib/auth/auth-client";

export function LoginForm({ showTitle = true, showFooter = true }: { showTitle?: boolean; showFooter?: boolean }) {
  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col gap-8">
        {showTitle && <h1 className="text-xl text-center">Log in to X Boilerplate</h1>}

        <div className="flex flex-col gap-4">
          <Button className="w-full" onClick={() => signIn.social({ provider: "github" })}>
            <SiGithub />
            Continue with Github
          </Button>
        </div>
      </div>

      {showFooter && (
        <div>
          <p className="text-xs text-stone-400">
            By continuing, you agree to X-Boilerplate Terms of Service and Privacy Policy, and to receive periodic
            emails with updates.
          </p>
        </div>
      )}
    </div>
  );
}
