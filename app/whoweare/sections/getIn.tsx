"use client";

import React from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import Link from "next/link";

export default function GetIn() {
    const { t } = useTranslation();
    
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-1 flex flex-col items-center justify-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold mb-10 text-center">
                    {t('whoweare.getIn.title')}
                </h2>

                {/* CTA Button */}
                <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center px-10 md:px-16 lg:px-24 py-4 md:py-5 rounded-full bg-[#ffe49b] text-[#122430] text-base md:text-xl lg:text-2xl font-semibold shadow-[0_8px_0_rgba(0,0,0,0.25)] border border-[#f1d27c]"
                >
                    {t('whoweare.getIn.button')}
                </Link>
            </div>
        </section>
    );
}


