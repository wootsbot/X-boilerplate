'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { AVAILABLE_LANGUAGES } from '@/libs/i18n/constants';
import i18n from '@/libs/i18n/init';

import Header from '@/components/Header';

function I18nextPage() {
  const router = useRouter();
  const { t, i18n } = useTranslation(['common', 'i18next']);

  function handleGoBack() {
    router.push('/');
  }

  function handleChangueL(event: React.FormEvent<HTMLSelectElement>) {
    i18n.changeLanguage(event.currentTarget.value);
  }

  return (
    <>
      <Header
        title={`🐂 ${t('i18next:header.title')}`}
        subTitle={t('i18next:header.subTitle')}
        name={`${t('i18next:header.name')} `}
        message={t('i18next:header.message')}
        onGoBack={handleGoBack}
        goBackLabel={t('actions.goBack')}
      />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label>{t('i18next:lenguaje.selectLabel')}:</label>

          <select name="lenguajesField" id="lenguaje-select" onChange={handleChangueL} defaultValue={i18n.language}>
            <option value="">{t('i18next:lenguaje.optionDefaultLable')}</option>
            {AVAILABLE_LANGUAGES.map(({ key }) => (
              <option key={key} value={key}>
                {t(`common:languages.${key}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default I18nextPage;
