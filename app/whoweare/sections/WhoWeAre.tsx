"use client";

import React from "react";
import Image from "next/image";
import profileImage from "../images/weare.webp";
import Barrier from "./barrier";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function WhoWeAre() {
    const { t } = useTranslation();
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6 mb-15">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            {t('whoweare.whoWeAre.title')}
                        </h2>
                        <p className="text-base md:text-4xl lg:leading-10 leading-relaxed text-gray-200 mb-6 font-extralight">
                            {t('whoweare.whoWeAre.subtitle')}
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-6">
                            {t('whoweare.whoWeAre.description')}
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative z-10 order-1 lg:order-2">
                        <Image src={profileImage} alt="DEUS Human Capital Services" width={500} height={500} />
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <Barrier />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed text-gray-200 space-y-6">
                    <p>
                        {t('whoweare.whoWeAre.journey')}
                    </p>
                    <div id="our-journey">
                        <p>
                            {t('whoweare.whoWeAre.komInfo')}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

