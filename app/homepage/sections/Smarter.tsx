"use client";

import React from "react";
import Image from "next/image";
import smarterImage from "../images/DEUS-Smarter.webp";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Smarter() {
    const { t } = useTranslation();
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Person with Headset */}
                    <div className="relative z-10 order-1 lg:order-1">
                        <Image src={smarterImage} alt="Smarter Operations" width={500} height={500} />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-6 leading-tight">
                            {t('homepage.smarter.title')}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            {t('homepage.smarter.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}



