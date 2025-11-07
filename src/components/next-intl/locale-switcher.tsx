"use client";

import { type Locale, useLocale } from "next-intl";

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

export function LocaleSwitcher({ changeLocaleAction }: Props) {
  const locale = useLocale();

  return (
    <div className="flex gap-2">
      {["en", "es-mx"].map((cur) => (
        <button
          type="button"
          className="cursor-pointer"
          key={cur}
          onClick={() => changeLocaleAction(cur as Locale)}
          style={{ fontWeight: locale === cur ? "bold" : "normal" }}
        >
          {cur.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
