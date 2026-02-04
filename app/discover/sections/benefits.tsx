"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import brandingImage from "../images/benefits/Improved-Company-Branding-.webp";
import digitalizationImage from "../images/benefits/Powerful-Digitalization.webp";
import practiceImage from "../images/benefits/gamified-assessment-practice.webp";
import biasImage from "../images/benefits/Gamified-assessments-to-reduce-response-bias.webp";
import { useTranslation } from "@/app/hooks/useTranslation";

interface BenefitItemProps {
    title: string;
    description: string | React.ReactNode;
    image: StaticImageData;
    imageAlt: string;
    reverse?: boolean;
}

function BenefitItem({ title, description, image, imageAlt, reverse = false }: BenefitItemProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className={`relative z-10 ${reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                    {title}
                </h2>
                <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                    {description}
                </div>
            </div>

            {/* Illustration */}
            <div className={`relative z-10 ${reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default function Benefits() {
    const { t } = useTranslation();
    
    return (
        <>
            {/* Enhanced Company Branding */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title={t('discover.benefits.enhancedBranding.title')}
                        description={t('discover.benefits.enhancedBranding.description')}
                        image={brandingImage}
                        imageAlt="Enhanced Company Branding - Growth and Efficiency"
                    />
                </div>
            </section>

            {/* Powerful Digitalization */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title={t('discover.benefits.powerfulDigitalization.title')}
                        description={t('discover.benefits.powerfulDigitalization.description')}
                        image={digitalizationImage}
                        imageAlt="Powerful Digitalization - Data Analytics and Digital Transformation"
                        reverse={true}
                    />
                </div>
            </section>

            {/* Gamified Assessment Practice */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title={t('discover.benefits.gamifiedPractice.title')}
                        image={practiceImage}
                        imageAlt="Gamified Assessment Practice"
                        description={t('discover.benefits.gamifiedPractice.description')}
                    />
                </div>
            </section>

            {/* Reduce Response Bias */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title={t('discover.benefits.reduceBias.title')}
                        image={biasImage}
                        imageAlt="Gamified Assessments to Reduce Response Bias"
                        description={t('discover.benefits.reduceBias.description')}
                        reverse={true}
                    />
                </div>
            </section>
        </>
    );
}

