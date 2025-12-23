import React from "react";
import Image from "next/image";
import heroBannerImage from "../images/DEUS-Human-Capital-Services-Indonesia.webp";
import bottomSectionBg from "../images/DEUS-Technology.jpeg";

export default function HeroBanner() {
    return (
        <div className="relative w-full">
            {/* Top Section - Dark Teal Background */}
            <section className="relative bg-[#122430] text-white overflow-hidden">
                <div className="container mx-auto px-6 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8">
                                Helping Indonesian<br />
                                Businesses With<br />
                                Gamified Assessments<br />
                                & HR Services
                            </h1>

                            {/* Service Descriptions */}
                            <div className="space-y-6">
                                {/* DEUS Discover */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-base text-justify md:text-lg leading-relaxed">
                                            If your company needs guidance for efficient recruitment or
                                            employee development: check out{" "}
                                            <strong>DEUS Discover</strong> for the first gamified
                                            assessment in Indonesia!
                                        </p>
                                    </div>
                                </div>

                                {/* DEUS Enhance */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-base text-justify md:text-lg leading-relaxed">
                                            If your company needs better KPI management and workforce
                                            development tools: check out{" "}
                                            <strong>DEUS Enhance</strong> here.
                                        </p>
                                    </div>
                                </div>

                                {/* Eagle Vision */}
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-base text-justify md:text-lg leading-relaxed">
                                            If your company is having a hard time keeping up with
                                            operational task managements: check out{" "}
                                            <strong>Eagle Vision</strong> here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Visual Elements */}
                        <div className="relative order-1 lg:order-2 lg:flex lg:justify-end">
                            <Image src={heroBannerImage} alt="Hero Banner" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section - Dark Blue Textured Background */}
            <section
                className="relative text-white py-16 lg:py-20"
                style={{
                    backgroundImage: `url(${bottomSectionBg.src})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1a3a4a] opacity-70 z-0"></div>

                {/* Scrollable Content */}
                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Quote */}
                        <blockquote className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-8">
                            &ldquo;DEUS Human Capital Services provides optimized solutions
                            for hr services aimed at enhancing employee management.&rdquo;
                        </blockquote>

                        {/* Descriptive Paragraph */}
                        <p className="text-base text-justify md:text-lg lg:text-xl leading-relaxed text-gray-200">
                            Our platform is dedicated to maximizing employee performance while
                            fostering innovation in talent management and HR services in
                            Indonesia. By utilizing modernized HR software, DEUS Human Capital
                            Services guarantees smooth integration and enhanced performance
                            across the organization.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

