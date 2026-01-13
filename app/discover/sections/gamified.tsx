"use client";

import React, { useState } from "react";
import Image from "next/image";
import recruitmentImage from "../images/gamified /Gamified-assessment-for-recruitment-in-Indonesia.webp";
import talentAcquisitionImage from "../images/gamified /Gamified-assessment-for-talent-acquisition.webp";
import gapAnalysisImage from "../images/gamified /Gamified-asessments-for-gap-analysis.webp";
import nurturingTalentImage from "../images/gamified /Gamifikasi-untuk-Rekrutmen-dan-Pengembangan-Karyawan-1536x864.webp";
import psychometricImage2 from "../images/gamified /gamified-psychometric-assessment-2-1.webp";
import psychometricResultImage from "../images/gamified /Gamified-psychometric-assessment-result-1.webp";
import psychometricImage3 from "../images/gamified /gamified-psychometric-assessment-3-1.webp";

function GapAnalysisSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImages = [
        { src: psychometricImage2, alt: "DEUS Discover - Psychometric Assessment 2" },
        { src: psychometricResultImage, alt: "DEUS Discover - Psychometric Assessment Result" },
        { src: psychometricImage3, alt: "DEUS Discover - Psychometric Assessment 3" }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Gap Analysis UI Image Carousel */}
                    <div className="relative z-10 order-1 lg:order-1">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src={carouselImages[currentImageIndex].src}
                                alt={carouselImages[currentImageIndex].alt}
                                width={800}
                                height={600}
                                className="object-contain w-full h-auto"
                            />

                            {/* Carousel Navigation Buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                aria-label="Previous image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                aria-label="Next image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {carouselImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-2">
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                            Gain clarity on job fit with outputs from our gamified assessment. Receive detailed recommendations and percentages for both current employees and candidates, making informed decisions a breeze.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Gamified() {
    return (
        <>
            {/* Talent Acquisition Section */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - UI Image */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={recruitmentImage}
                                    alt="DEUS Discover - Gamified Assessment for Recruitment in Indonesia"
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Utilize DEUS Discover to minimize efforts for the most effective talent acquisition process. In addition, we guarantee that you choose the best match for the position based on their competencies and strengths.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Individual Report Section */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Our platform helps uncover leadership potential by analyzing competency and personality traits, which gives you the tools to identify future leaders for your company.
                            </p>
                        </div>

                        {/* Right Side - Individual Report UI Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={talentAcquisitionImage}
                                    alt="DEUS Discover - Talent Acquisition Assessment"
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gap Analysis Section */}
            <GapAnalysisSection />

            {/* Development Section */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Address skill gaps at an individual level. DEUS&apos; gamified assessment enables you to conduct in-depth gap analysis, therefore empowering you to tailor development plans effectively.
                            </p>
                        </div>

                        {/* Right Side - Development UI Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={gapAnalysisImage}
                                    alt="DEUS Discover - Development and Gap Analysis"
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nurturing Talent Section */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Nurturing Talent Image */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={nurturingTalentImage}
                                    alt="DEUS Discover - Nurturing Talent"
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                DEUS Discover helps companies&apos; candidate evaluations by recognizing and nurturing talent, ensuring they remain valuable assets to your organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Banner Section */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl md:text-2xl lg:text-3xl italic text-gray-200">
                            Experience the power of DEUS gamified assessment and take your talent management to a new level.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

