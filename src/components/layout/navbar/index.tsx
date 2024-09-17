import Image from 'next/image';

import { auth } from '@/libs/auth';

import { IconXB } from '@design-system/icons/x-boilerpplate';
import * as Buttons from './buttons';

export async function Navbar() {
  let session = await auth();

  return (
    <header className="border-b border-stone-300">
      <nav className="px-4 py-4 max-w-7xl sm:mx-auto">
        <div className="flex flex-row items-center justify-between h-full">
          <a href="/">
            <IconXB size={28} />
          </a>

          <ul className="flex items-center gap-6 text-sm">
            <li>Build</li>
            <li>Resources</li>
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
