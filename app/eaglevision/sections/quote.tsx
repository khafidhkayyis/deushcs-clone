"use client";

import React from "react";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Quote() {
    const { t } = useTranslation();
    
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                    <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-gray-200">
                        &ldquo;{t('eaglevision.quote.text')}&rdquo;
                    </blockquote>
                </div>
            </div>
        </section>
    );
}

