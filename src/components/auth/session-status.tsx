"use server";

import { headers } from "next/headers";

import { CirclePulse } from "#/components/com/circle-pulse";
import { auth } from "#/lib/auth";

export async function SessionStatus() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      {session?.user && (
        <div className="flex flex-row items-center gap-2 px-3 py-1 rounded-full bg-stone-300">
          <span className="text-xs">Verified</span>
          <CirclePulse color="secondary" size={10} />
        </div>
      )}

      {!session?.user && (
        <div className="flex flex-row items-center gap-2 px-3 py-1 rounded-full bg-stone-300">
          <span className="text-xs">Unverified</span>
          <CirclePulse color="danger" size={10} />
        </div>
      )}
    </>
  );
}
