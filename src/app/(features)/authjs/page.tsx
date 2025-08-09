import * as dateFns from "date-fns";
import Image from "next/image";
import type { Tool } from "#/components/com/tools-list";
import { ToolsList } from "#/components/com/tools-list";
import { auth } from "#/lib/auth";
import pkg from "~/pkg";

const TOOLS: Tool[] = [
  { version: pkg.dependencies["next-auth"], name: "next-auth", urlRef: "https://next-auth.js.org" },
  { version: pkg.dependencies["date-fns"], name: "date-fns", urlRef: "https://github.com/date-fns/date-fns#readme" },
];

export default async function AuthjsPage() {
  const session = await auth();

  const formattedDate = dateFns.format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy, HH:mm:ss");

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div className="flex flex-col items-center gap-4">
        <Image
          className="rounded-full"
          src={session?.user?.image as string}
          width={80}
          height={80}
          alt="avatar"
          content="responsive"
        />
        <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
        <p className="text-lg">{session?.user?.email}</p>
        <p className="text-sm text-stone-500">{formattedDate}</p>
      </div>
      <section className="py-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-end gap-3">
            <h2 className="text-5xl font-medium">Tools</h2>
            <p className="text-sm font-thin">
              Tools used in the development of this example and their respective versions.
            </p>
          </div>

          <ToolsList list={TOOLS} />
        </div>
      </section>
    </div>
  );
}
