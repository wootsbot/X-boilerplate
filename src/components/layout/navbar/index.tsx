import { cookies, headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "next-intl";
import { LocaleSwitcher } from "#/components/next-intl/locale-switcher";
import * as Icons from "#/components/ui/icons";
import { auth } from "#/lib/auth";
import * as Buttons from "./buttons";

export async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  async function changeLocaleAction(locale: Locale) {
    "use server";
    const store = await cookies();
    store.set("locale", locale);
  }

  return (
    <header className="border-b border-stone-300">
      <nav className="px-4 py-4 max-w-7xl sm:mx-auto">
        <div className="flex flex-row items-center justify-between h-full">
          <Link href="/">
            <Icons.XBIcon size={28} />
          </Link>

          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link href="https://github.com/wootsbot/X-boilerplate" target="_blank">
                <Buttons.SignGithub />
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            {session?.user && (
              <Image
                className="rounded-full"
                src={session?.user?.image as string}
                width={30}
                height={30}
                alt="avatar"
              />
            )}

            <div className="flex-none">{session?.user ? <Buttons.SignOutButton /> : <Buttons.LoginButton />}</div>

            <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
          </div>
        </div>
      </nav>
    </header>
  );
}
