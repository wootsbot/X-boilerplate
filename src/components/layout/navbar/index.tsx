import Image from 'next/image';
import Link from 'next/link';

import { auth } from '@/libs/auth';

import { IconXB } from '@design-system/icons/x-boilerpplate';
import * as Buttons from './buttons';

export async function Navbar() {
  let session = await auth();

  return (
    <header className="border-b border-stone-300">
      <nav className="px-4 py-4 max-w-7xl sm:mx-auto">
        <div className="flex flex-row items-center justify-between h-full">
          <Link href="/">
            <IconXB size={28} />
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
          </div>
        </div>
      </nav>
    </header>
  );
}
