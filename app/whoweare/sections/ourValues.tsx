"use client";

import React from "react";
import Image from "next/image";
import innovativeImage from "../images/ourValue/always-innovating-with-our-human-resource-management-planning-1.webp";
import inspiringImage from "../images/ourValue/Inspiring-companies-with-our-hr-saas-services-and-gamification-1.webp";
import investedImage from "../images/ourValue/Always-dedicated-to-corporate-client-human-resource-development-providing-innovative-HR-solutions-employee-training-and-talent-management-services-to-boost-workforce-productivity-and-engagement.webp";
import inclusiveImage from "../images/ourValue/Mendukung-pengembangan-SDM-di-era-digital-dengan-software-HR-dan-gamifikasi-1.webp";
import insightfulImage from "../images/ourValue/DEUS-DIscover-images-35.png";
import improvementImage from "../images/ourValue/Prioritizing-corporate-employee-development-with-innovative-training-programs-talent-management-solutions-and-HR-strategies-2.webp";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function OurValues() {
    const { t } = useTranslation();
    
    const values = [
        {
            title: t('whoweare.ourValues.innovative.title'),
            image: innovativeImage,
            text: t('whoweare.ourValues.innovative.description')
        },
        {
            title: t('whoweare.ourValues.inspiring.title'),
            image: inspiringImage,
            text: t('whoweare.ourValues.inspiring.description')
        },
        {
            title: t('whoweare.ourValues.invested.title'),
            image: investedImage,
            text: t('whoweare.ourValues.invested.description')
        },
        {
            title: t('whoweare.ourValues.inclusive.title'),
            image: inclusiveImage,
            text: t('whoweare.ourValues.inclusive.description')
        },
        {
            title: t('whoweare.ourValues.insightful.title'),
            image: insightfulImage,
            text: t('whoweare.ourValues.insightful.description')
        },
        {
            title: t('whoweare.ourValues.improvement.title'),
            image: improvementImage,
            text: t('whoweare.ourValues.improvement.description')
        }
    ];

    return (
        <section id="our-values" className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Illustration */}
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    width={300}
                                    height={300}
                                    className="object-contain"
                                />
                            </div>

                            {/* Heading */}
                            <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 text-center">
                                {value.title}
                            </h3>

                            {/* Text */}
                            <p className="text-base md:text-lg leading-relaxed text-gray-200 text-center">
                                {value.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

