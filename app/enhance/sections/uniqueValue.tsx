import React from "react";
import Image from "next/image";
import performanceTrackingImage from "../images/uniqueValue/KPI-management-for-employee-performance-review.webp";
import secureTrackingImage from "../images/uniqueValue/KPI-Tracking-for-Indonesian-Business.webp";
import clearMetricsImage from "../images/uniqueValue/KPI-metrics-for-Indonesian-business.png";
import realTimeInsightsImage from "../images/uniqueValue/Real-time-KPI-tracking.webp";
import speedUpDecisionImage from "../images/uniqueValue/KPI-management-for-Indonesian-business-decision-making.webp";

export default function UniqueValue() {
    return (
        <>
            {/* Comprehensive Performance Tracking */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Comprehensive Performance Tracking
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Easily manage individual and team employee performance with DEUS Enhance. Our platform combines key data points, from productivity to financial metrics, making KPI management simpler and helping your company maintain a competitive edge for steady business growth.
                            </p>
                        </div>

                        {/* Right Side - Dashboard Card */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={performanceTrackingImage}
                                    alt="KPI Tracking Dashboard - Performance Management"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secure KPI Tracking */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Secure KPI Tracking (100% Data Anonimity)
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Ensure the confidentiality of performance data while effectively monitoring KPIs for both individuals and teams in KPI management.
                            </p>
                        </div>

                        {/* Right Side - Security Illustration */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={secureTrackingImage}
                                    alt="Secure KPI Tracking - Data Anonymity and Security"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clear Metrics */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Clear Metrics
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Measurable, real-time data ensures performance reviews are grounded in accuracy and fairness.
                            </p>
                        </div>

                        {/* Right Side - Metrics Dashboard */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={clearMetricsImage}
                                    alt="Clear Metrics - KPI and Competency Dashboard"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-Time Insights */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Real-Time Insights
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Access real-time information to enhance training needs analysis and create effective long-term strategies for team and company development.
                            </p>
                        </div>

                        {/* Right Side - Real-Time Illustration */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={realTimeInsightsImage}
                                    alt="Real-Time Insights - Training and Development"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Speed Up Decision Making */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Illustration */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={speedUpDecisionImage}
                                    alt="Speed Up Decision Making - Employee Insights"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Speed Up Decision Making
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                An efficient tool with detailed insights about employees facilitate prompt decision making by allowing managers to evaluate and respond swiftly to insights about employee performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

