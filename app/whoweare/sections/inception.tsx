"use client";

import React from "react";
import BarrierName from "./barrierName";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getTranslation } from "@/app/utils/translations";

export default function OurProcess() {
    const { locale } = useTranslation();
    const translations = getTranslation(locale);
    const inceptionItems = translations.whoweare.inception.items;
    const implementationItems = translations.whoweare.implementation.items;

    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-15">
            <div className="container mx-auto px-6 mb-12">
                {/* Title - Inception */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-left">
                    {translations.whoweare.inception.title}
                </h2>

                {/* Grid of boxes - 2 rows, 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full lg:h-85 mb-16 lg:mb-24 perspective-[1000px]">
                    {inceptionItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#93bcd7] hover:bg-gray-500 rounded-lg px-6 py-8 text-center text-white font-black text-lg lg:text-xl md:text-xl flex items-center justify-center min-h-[120px] transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative"
                        >
                            <span className="group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">{item.normal}</span>
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1]">{item.hover}</span>
                        </div>
                    ))}
                </div>

                {/* Title - Implementation */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-left">
                    {translations.whoweare.implementation.title}
                </h2>

                {/* Grid of boxes - 2 rows, 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full lg:h-85 perspective-[1000px]">
                    {implementationItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#d4c7b0] hover:bg-gray-500 rounded-lg px-6 py-8 text-center text-white font-black text-lg lg:text-xl md:text-xl flex items-center justify-center min-h-[120px] transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative"
                        >
                            <span className="group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">{item.normal}</span>
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1]">{item.hover}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <BarrierName index={1} />
            </div>
        </section>
    );
}

