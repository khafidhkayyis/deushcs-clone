"use client";

import { useLanguage } from '@/app/contexts/LanguageContext';
import { t as translate } from '@/app/utils/translations';

export function useTranslation() {
  const { locale } = useLanguage();

  const t = (key: string, params?: Record<string, string>) => {
    return translate(key, locale, params);
  };

  return { t, locale };
}

