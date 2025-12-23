import React from "react";

export default function HeroBanner() {
    return (
        <div className="relative w-full">
            {/* Top Section - Dark Teal Background */}
            <section className="relative bg-[#0d4f5c] text-white overflow-hidden">
                <div className="container mx-auto px-6 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
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
                                        <p className="text-base md:text-lg leading-relaxed">
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
                                        <p className="text-base md:text-lg leading-relaxed">
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
                                        <p className="text-base md:text-lg leading-relaxed">
                                            If your company is having a hard time keeping up with
                                            operational task managements: check out{" "}
                                            <strong>Eagle Vision</strong> here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Visual Elements */}
                        <div className="relative lg:flex lg:justify-end">
                            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                                {/* Abstract Geometric Shapes */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-10 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
                                    <div className="absolute top-32 left-10 w-12 h-12 bg-white opacity-30 transform rotate-45"></div>
                                    <div className="absolute bottom-20 right-10 w-8 h-8 border-2 border-white transform rotate-45"></div>
                                    <div className="absolute top-20 left-32 w-10 h-10 bg-white opacity-20 transform rotate-45"></div>
                                </div>

                                {/* Woman with Tablet */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-48 h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm">Woman Image</span>
                                    </div>

                                    {/* Devices */}
                                    <div className="relative w-full max-w-md">
                                        {/* Laptop */}
                                        <div className="absolute -bottom-8 -left-8 w-32 h-24 bg-gray-200 rounded border-2 border-gray-400 p-1">
                                            <div className="w-full h-full bg-linear-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">
                                                    Game Screen
                                                </span>
                                            </div>
                                        </div>

                                        {/* Tablet */}
                                        <div className="absolute -top-4 left-16 w-24 h-32 bg-white rounded border-2 border-gray-400 p-1">
                                            <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="w-16 h-2 bg-blue-400 mb-1 mx-auto"></div>
                                                    <div className="w-12 h-2 bg-green-400 mb-1 mx-auto"></div>
                                                    <div className="w-14 h-2 bg-yellow-400"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Smartphone */}
                                        <div className="absolute -bottom-4 left-32 w-12 h-20 bg-gray-800 rounded-lg border-2 border-gray-600 p-1">
                                            <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="w-6 h-1 bg-blue-500 mb-1 mx-auto rounded"></div>
                                                    <div className="w-6 h-1 bg-green-500 mb-1 mx-auto rounded"></div>
                                                    <div className="w-6 h-1 bg-yellow-500 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section - Dark Blue Textured Background */}
            <section className="bg-[#1a3a4a] text-white py-16 lg:py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Quote */}
                        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                            &ldquo;DEUS Human Capital Services provides optimized solutions
                            for hr services aimed at enhancing employee management.&rdquo;
                        </blockquote>

                        {/* Descriptive Paragraph */}
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
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

