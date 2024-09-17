import type { En, EsMX } from '@openkit/language-codes';
import localeCulture from '@openkit/language-codes';

import type locales from '@/libs/i18n/locales';

export type Language = {
  key: keyof typeof locales;
  dir?: 'ltr' | 'rtl';
  fontScale?: number;
  specCulture?: En['culture'] | EsMX['culture'];
};

export const DEFAULT_NAMESPACE = 'common';

export const DEFAULT_LANGUAGE_KEY: Language['key'] =
  process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE_KEY ?? localeCulture.EN.folderName;

export const AVAILABLE_LANGUAGES: Language[] = [
  {
    key: localeCulture.EN.folderName,
    specCulture: localeCulture.EN.culture,
  },
  {
    key: localeCulture.ES_MX.folderName,
    specCulture: localeCulture.ES_MX.culture,
  },
];
