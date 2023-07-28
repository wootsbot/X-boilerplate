import locales from '@/libs/i18n/locales';

export type Language = {
  key: keyof typeof locales;
  dir?: 'ltr' | 'rtl';
  fontScale?: number;
  // https://gist.github.com/JamieMason/3748498
  specCulture?: 'en-US' | 'es-MX';
};

export const DEFAULT_NAMESPACE = 'common';

export const DEFAULT_LANGUAGE_KEY: Language['key'] = 'en';

export const AVAILABLE_LANGUAGES: Language[] = [
  {
    key: 'en',
    specCulture: 'en-US',
  },
  {
    key: 'es_mx',
    specCulture: 'es-MX',
  },
];
