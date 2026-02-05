import enTranslations from '@/app/locales/en.json';
import idTranslations from '@/app/locales/id.json';

export type Locale = 'en' | 'id';

const translations = {
    en: enTranslations,
    id: idTranslations,
};

export function getTranslation(locale: Locale = 'en') {
    return translations[locale] || translations.en;
}

export function t(key: string, locale: Locale = 'en', params?: Record<string, string>): string {
    const translation = getTranslation(locale);
    const keys = key.split('.');
    let value: any = translation;

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return key;
        }
    }

    if (typeof value !== 'string') {
        return key;
    }

    if (params) {
        return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
            return params[paramKey] || match;
        });
    }

    return value;
}

