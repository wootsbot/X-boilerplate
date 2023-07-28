import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE_KEY, DEFAULT_NAMESPACE } from '@/libs/i18n/constants';
import locales from '@/libs/i18n/locales';
import { isBrowser } from '@/libs/ssr';

i18n.use(initReactI18next).init({
  defaultNS: DEFAULT_NAMESPACE,
  ns: Object.keys(locales[DEFAULT_LANGUAGE_KEY]),
  resources: locales,
  lng: DEFAULT_LANGUAGE_KEY,
  fallbackLng: DEFAULT_LANGUAGE_KEY,

  // Fix issue with i18next types
  // https://www.i18next.com/overview/typescript#argument-of-type-defaulttfuncreturn-is-not-assignable-to-parameter-of-type-xyz
  returnNull: false,

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

i18n.on('languageChanged', (langKey) => {
  const language = AVAILABLE_LANGUAGES.find(({ key }) => key === langKey);

  if (isBrowser) {
    document.documentElement.lang = langKey;
    document.documentElement.dir = language?.dir ?? 'ltr';
    document.documentElement.style.fontSize = `${(language?.fontScale ?? 1) * 100}%`;
  }
});

export default i18n;
