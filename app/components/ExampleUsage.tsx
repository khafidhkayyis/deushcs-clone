"use client";

import { useTranslation } from '@/app/hooks/useTranslation';

export default function ExampleUsage() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('homepage.heroBanner.title')}</h1>
            <p>{t('homepage.heroBanner.description')}</p>

            <p>
                {t('homepage.heroBanner.discover.description', {
                    product: 'DEUS Discover'
                })}
            </p>

            <h2>{t('homepage.service.title')}</h2>
            <p>{t('homepage.service.description')}</p>

            <div>
                <h3>{t('homepage.transformational.stat1.value')}</h3>
                <p>{t('homepage.transformational.stat1.description')}</p>
            </div>
        </div>
    );
}

