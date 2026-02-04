"use client";

import React from "react";
import Image from "next/image";
import heroBannerImage from "../images/DEUS-Enhance-for-KPI-Management-r5qsxu0jv9ibert6fqpn48rw8yga1xyc8r3uziyodm.webp";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function HeroBanner() {
    const { t } = useTranslation();
    return (
        <section className="relative bg-[#122430] text-white overflow-hidden">
            <div className="container mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    {/* Left Side - Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl lg:text-4xl font-black mb-6 leading-tight">
                            {t('enhance.heroBanner.title')}
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extralight mb-6">
                            {t('enhance.heroBanner.subtitle')}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            {t('enhance.heroBanner.description')}
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative order-1 lg:order-2 lg:flex lg:justify-center">
                        <Image
                            src={heroBannerImage}
                            alt="DEUS Enhance KPI Management"
                            width={350}
                            height={350}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

