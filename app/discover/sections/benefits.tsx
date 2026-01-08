import React from "react";
import Image, { StaticImageData } from "next/image";
import brandingImage from "../images/benefits/Improved-Company-Branding-.webp";
import digitalizationImage from "../images/benefits/Powerful-Digitalization.webp";
import practiceImage from "../images/benefits/gamified-assessment-practice.webp";
import biasImage from "../images/benefits/Gamified-assessments-to-reduce-response-bias.webp";

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
    return (
        <>
            {/* Enhanced Company Branding */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title="Enhanced Company Branding"
                        description={
                            <>
                                Instant and automated results, no more manual grading.
                                <br />
                                DEUS delivers real-time insights, making your assessment
                                <br />
                                process efficient and effective.
                            </>
                        }
                        image={brandingImage}
                        imageAlt="Enhanced Company Branding - Growth and Efficiency"
                    />
                </div>
            </section>

            {/* Powerful Digitalization */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title="Powerful Digitalization"
                        description="Stand out, especially to Gen-Z and Millennials. DEUS' assessment tool not only evaluate talent but also boost your company's image in the ever growing digital age."
                        image={digitalizationImage}
                        imageAlt="Powerful Digitalization - Data Analytics and Digital Transformation"
                        reverse={true}
                    />
                </div>
            </section>

            {/* Gamified Assessment Practice */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title="Gamified Assessment Practice"
                        image={practiceImage}
                        imageAlt="Gamified Assessment Practice"
                        description="Experience engaging and interactive assessments that make evaluation enjoyable while maintaining accuracy and reliability."
                    />
                </div>
            </section>

            {/* Reduce Response Bias */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <BenefitItem
                        title="Gamified Assessments to Reduce Response Bias"
                        image={biasImage}
                        imageAlt="Gamified Assessments to Reduce Response Bias"
                        description="Our innovative gamified approach minimizes response bias, providing more authentic and accurate assessment results through engaging gameplay mechanics."
                        reverse={true}
                    />
                </div>
            </section>
        </>
    );
}

