"use client";

import React from "react";
import Image from "next/image";
import icon1 from "../images/icon/DEUS-Discover-6-150x150.png";
import icon2 from "../images/icon/DEUS-Discover-8-150x150.png";
import icon3 from "../images/icon/DEUS-Discover-9-150x150.png";
import { useTranslation } from "@/app/hooks/useTranslation";
import { getTranslation } from "@/app/utils/translations";

export default function Pillars() {
    const { locale } = useTranslation();
    const translations = getTranslation(locale);
    const pillarsItems = translations.homepage.pillars.items;
    const icons = [icon1, icon2, icon3];

    return (
        <section className="relative bg-[#f8f7f3] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto perspective-[1000px]">
                    {pillarsItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex items-center justify-center p-4">
                                <Image
                                    src={icons[index]}
                                    alt={item.normal}
                                    width={150}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <div className="group w-full bg-[#1a3a4a] hover:bg-gray-500 rounded-lg py-15 text-center shadow-md transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative flex items-center justify-center">
                                <span className="text-white text-base md:text-lg font-semibold group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">
                                    {item.normal}
                                </span>
                                <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1] text-white text-base md:text-sm px-0 md:px-10 font-semibold">
                                    {item.hover}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

