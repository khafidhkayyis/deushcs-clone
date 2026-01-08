import React from "react";
import Image from "next/image";
import recruitmentImage from "../images/gamified /Gamified-assessment-for-recruitment-in-Indonesia.webp";
import talentAcquisitionImage from "../images/gamified /Gamified-assessment-for-talent-acquisition.webp";
import psychometricImage from "../images/gamified /gamified-psychometric-assessment-3-1.webp";
import gapAnalysisImage from "../images/gamified /Gamified-asessments-for-gap-analysis.webp";
import nurturingTalentImage from "../images/gamified /Gamifikasi-untuk-Rekrutmen-dan-Pengembangan-Karyawan-1536x864.webp";

export default function Gamified() {
    return (
        <>
            {/* Talent Acquisition Section */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
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
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
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
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Gap Analysis UI Image */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={psychometricImage}
                                    alt="DEUS Discover - Psychometric Assessment"
                                    width={800}
                                    height={600}
                                    className="object-contain w-full h-auto"
                                />
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

            {/* Development Section */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
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
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
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
        </>
    );
}

