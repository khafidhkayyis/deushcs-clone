"use client";

import React from "react";
import bottomSectionBg from "../images/DEUS-Technology.jpeg";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Stats() {
    const { t } = useTranslation();
    return (
        <section
            className="relative text-white py-16 lg:py-24 overflow-hidden"
            style={{
                backgroundImage: `url(${bottomSectionBg.src})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1a3a4a] opacity-70 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold leading-tight">
                        {t('homepage.transformational.title')}
                    </h2>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Stat 1 */}
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl lg:text-5xl font-extrabold mb-4 text-blue-50">
                            {t('homepage.transformational.stat1.value')}
                        </div>
                        <p className="text-base md:text-lg text-gray-50">
                            {t('homepage.transformational.stat1.description')}
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl lg:text-5xl font-extrabold mb-4 text-blue-50">
                            {t('homepage.transformational.stat2.value')}
                        </div>
                        <p className="text-base md:text-lg text-gray-50">
                            {t('homepage.transformational.stat2.description')}
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl lg:text-5xl font-extrabold mb-4 text-blue-50">
                            {t('homepage.transformational.stat3.value')}
                        </div>
                        <p className="text-base md:text-lg text-gray-50">
                            {t('homepage.transformational.stat3.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

