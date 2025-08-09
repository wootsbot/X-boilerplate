"use client";

import * as dateFns from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { cls } from "#/lib/utils/cls";
import type { Repository as RepositoryT } from "#/state/queries/github";

export function RepositoriesList({ items }: { items: RepositoryT[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items?.map((repo) => (
        <Repository key={repo.id} {...repo} />
      ))}
    </div>
  );
}

export function Repository({
  homepage,
  owner,
  fullName,
  description,
  topics,
  language,
  stargazersCount,
  forks,
  updatedAt,
}: RepositoryT) {
  return (
    <div className="p-3 border rounded-md border-stone-400">
      <div className="flex flex-col gap-2">
        {homepage && (
          <Link href={homepage} target="_blank">
            <div className="flex items-center gap-2">
              <Image className="rounded-md" src={owner.avatarUrl} alt={owner.login} width={20} height={20} />
              <p className="font-mono text-sm text-blue-500">{fullName}</p>
            </div>
          </Link>
        )}

        {!homepage && (
          <div className="flex items-center gap-2">
            <Image className="rounded-md" src={owner.avatarUrl} alt={owner.login} width={20} height={20} />
            <p className="font-mono text-sm text-stone-600">{fullName}</p>
          </div>
        )}

        <div>
          <p className="text-xs text-stone-500">{description}</p>
        </div>

        <div>
          {topics.length > 0 && (
            <div className="flex items-center gap-1">
              {topics.slice(0, 5).map((topic) => (
                <p
                  key={topic}
                  className={cls("text-xs font-mono text-stone-500", "bg-stone-200", "px-1", "rounded-xs")}
                >
                  {topic}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs text-stone-400">{language}</p>

          <p>·</p>

          <div className="flex items-center gap-1">
            <p className="text-xs text-stone-400">
              <svg focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
                <title>Star</title>
              </svg>
            </p>
            <p className="text-xs text-stone-400">{stargazersCount}</p>
          </div>

          <p>·</p>

          <div className="flex items-center gap-1">
            <p className="text-xs text-stone-400">
              <svg focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                <title>Fork</title>
              </svg>
            </p>
            <p className="text-xs text-stone-400">{forks}</p>
          </div>

          <p>·</p>

          <div>
            <p className="text-xs text-stone-400">{dateFns.format(updatedAt, "EEEE, dd MMMM yyyy")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Loader({ itemsLoadingCount = 10 }: { itemsLoadingCount?: number }) {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: itemsLoadingCount }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <com>
        <div key={index} className="w-full p-4 border rounded-md border-stone-300">
          <div className="flex space-x-4 animate-pulse">
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-stone-300" />
                <div className="w-full h-3 max-w-xs rounded-sm bg-stone-300" />
              </div>

              <div className="h-3 rounded-sm bg-stone-300" />

              <div className="flex items-center gap-1">
                <div className="w-16 h-3 rounded-xs bg-stone-300" />
                <div className="w-16 h-3 rounded-xs bg-stone-300" />
                <div className="w-16 h-3 rounded-xs bg-stone-300" />
                <div className="w-16 h-3 rounded-xs bg-stone-300" />
                <div className="w-16 h-3 rounded-xs bg-stone-300" />
              </div>

              <div className="w-full h-3 max-w-xs rounded-sm bg-stone-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
