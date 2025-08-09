"use client";

import Link from "next/link";
import { LoginForm } from "#/components/auth/login-form";
import * as Icons from "#/components/ui/icons";

export default function AuthLoginPage() {
  return (
    <div className="grid h-screen grid-flow-row-dense grid-cols-5 grid-rows-5">
      <main className="h-screen col-span-2">
        <div className="w-full h-full bg-stone-[#f2f0ed]">
          <div className="h-full max-w-lg px-4 mx-4 sm:mx-auto">
            <div className="flex flex-col justify-between h-full py-4">
              <Link href="/">
                <Icons.XBIcon />
              </Link>

              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-3xl font-bold">Welcome back!</h1>
                  <p className="text-mauve11">Log in to your account to continue.</p>
                </div>

                <LoginForm showTitle={false} showFooter={false} />
              </div>

              <p className="text-xs text-stone-400">
                By continuing, you agree to X-Boilerplate Terms of Service and Privacy Policy, and to receive periodic
                emails with updates.
              </p>
            </div>
          </div>
        </div>
      </main>

      <aside className="h-screen col-span-3">
        <div className="w-full h-full bg-stone-300">
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col px-4 mx-4 max-w-7xl sm:mx-auto">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-6xl font-semibold text-center w-full max-w-[700px] overflow-hidden">
                  <div className="inline-block" style={{ animation: "fadeInSlideRight 1s ease-out forwards" }}>
                    Only focus on building your product.
                  </div>
                </h1>

                <div className="flex flex-col items-center gap-1">
                  <h2 className="font-mono text-center w-full max-w-[600px] overflow-hidden">
                    <div className="inline-block" style={{ animation: "fadeInSlideRight 1.5s ease-out 0.5s forwards" }}>
                      A starting boilerplate with configuration and best practices for your Nextjs projects.
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
