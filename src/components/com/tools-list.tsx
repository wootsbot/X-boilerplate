"use client";

import Link from "next/link";
import { useState } from "react";

import { cls } from "#/lib/utils/cls";

export type Tool = {
  version: string;
  name: string;
  urlRef?: string;
};

type ToolsListProps = {
  list: Tool[];
};

export function ToolsList({ list }: ToolsListProps) {
  return (
    <div>
      <div className="border-b border-stone-400">
        <div className="flex flex-row items-center">
          <div className="w-32">
            <span className="text-xs font-light">/ Version</span>
          </div>

          <div>
            <span className="text-xs font-light">/ Name</span>
          </div>
        </div>
      </div>

      {list?.map((item) => (
        <ToolItem key={item.name} version={item.version} name={item.name} urlRef={item?.urlRef} />
      ))}
    </div>
  );
}

export function ToolItem({ version, name, urlRef }: Tool) {
  const [is, setIs] = useState(false);
  const CompRoot = urlRef ? Link : "div";

  return (
    <CompRoot href={urlRef as string} target="_blank">
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <> */}
      {/** biome-ignore lint/a11y/useKeyWithMouseEvents: <> */}
      <div
        className="py-4 border-b border-stone-400 hover:cursor-pointer"
        onMouseOver={() => setIs(true)}
        onMouseOut={() => setIs(false)}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center w-32 gap-2">
              <div className="w-2 h-2 bg-amber-600" />
              <span className="text-xs font-light">@{version}</span>
            </div>

            <div className={cls(is && "bg-amber-500")}>
              <span className="text-xl">{name}</span>
            </div>
          </div>

          <div>{is && urlRef && <span>↗</span>}</div>
        </div>
      </div>
    </CompRoot>
  );
}
