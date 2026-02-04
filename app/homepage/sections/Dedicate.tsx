"use client";

import React from "react";
import Image from "next/image";
import dedicateImage from "../images/DEUS-Dedicate.webp";
import { useTranslation } from "@/app/hooks/useTranslation";
import Link from "next/link";

export default function Dedicate() {
    const { t } = useTranslation();
    return (
        <>
            <section className="relative bg-[#ffffff] text-[#122430] py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Handshake */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <Image src={dedicateImage} alt="Business Partnership" width={500} height={500} />
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-6 leading-tight">
                                {t('homepage.dedicate.title')}
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                {t('homepage.dedicate.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-[#ffffff] text-[#122430] py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-8">
                            {t('homepage.dedicate.ctaTitle')}
                        </h2>
                        <Link href="/consultation" className="bg-[#ffeb3b] border-2 border-[#122430] rounded-full px-8 py-3 text-xl font-semibold text-[#122430] hover:bg-[#ffd700] transition-colors duration-300">
                            {t('homepage.dedicate.ctaButton')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

