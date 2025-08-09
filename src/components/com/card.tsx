"use client";

import type { PropsWithChildren } from "react";

import { cls } from "#/lib/utils/cls";

export function Card({
  children,
  className,
  mode,
}: PropsWithChildren<{
  className?: string;
  mode?: "default" | "demo";
}>) {
  return (
    <div
      className={cls(
        'px-6 py-12 rounded-md outline-1 outline-stone-400 bg-[url("/svg/grid_01.svg")] bg-cover bg-center bg-no-repeat bg-white/0',
        className,
      )}
    >
      {mode === "demo" && (
        <div className="flex flex-row items-center gap-1">
          <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.2308 7.56438V7.34644C15.2308 7.07029 15.0069 6.84644 14.7308 6.84644H9.26923C8.99308 6.84644 8.76923 7.07029 8.76923 7.34644V7.56438C8.76923 7.76264 8.92994 7.92336 9.1282 7.92336C9.52471 7.92336 9.84615 8.24479 9.84615 8.6413V12.5359C9.84615 13.1885 9.52773 13.8001 8.99307 14.1743L7.81814 14.9968C7.3835 15.301 7.03999 15.718 6.82451 16.2028C5.96647 18.1334 7.37966 20.308 9.49234 20.308H14.5076C16.6203 20.308 18.0335 18.1334 17.1755 16.2028C16.96 15.718 16.6165 15.301 16.1818 14.9968L15.0069 14.1743C14.4723 13.8001 14.1538 13.1885 14.1538 12.5359V8.6413C14.1538 8.24479 14.4753 7.92336 14.8718 7.92336C15.07 7.92336 15.2308 7.76264 15.2308 7.56438Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M17.1154 17.6154C17.1154 17.6154 15.7692 17.8846 12.8077 16.8077C9.84618 15.7307 6.88464 17.6154 6.88464 17.6154"
              stroke="currentColor"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
            <path
              d="M16.3077 15.1923C16.3077 15.1923 13.8846 13.8461 11.7308 14.6538C9.57693 15.4615 7.69232 15.1923 7.69232 15.1923"
              stroke="currentColor"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
            <path
              d="M14.1538 12.2308C14.1538 12.2308 12.8077 12.5 11.7308 11.9615C10.6538 11.423 9.98077 12.2308 9.98077 12.2308"
              stroke="currentColor"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
            <rect fill="currentColor" height="1.07692" rx="0.5" width="1.07692" x="11.4615" y="7.9231" />
            <rect fill="currentColor" height="1.07692" rx="0.5" width="1.07692" x="12.5385" y="3.0769" />
            <rect fill="currentColor" height="1.07692" rx="0.5" width="1.07692" x="9.84613" y="0.923096" />
            <title>Demo</title>
          </svg>

          <span>Demo</span>
        </div>
      )}

      {children}
    </div>
  );
}
