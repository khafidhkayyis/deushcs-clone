import React from "react";
import Image from "next/image";
import digitalizationImage from "../images/keyFeatures/digitalization-for-KPI-management.webp";
import appraisalFormImage from "../images/keyFeatures/Employee-performance-appraisal-form-for-KPI.webp";
import evaluationMethodsImage from "../images/keyFeatures/Employee-performance-evaluation-methods-2-scaled.webp";

export default function KeyFeatures() {
    return (
        <>
            {/* Digitalization for KPI Management */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Data-Driven Performance Evaluation
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Ensures each performance evaluation is supported by measurable insights, enhancing the accuracy of decision making processes.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={digitalizationImage}
                                    alt="Digitalization for KPI Management"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Performance Appraisal Form */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Comprehensive Performance Appraisal
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Streamlined appraisal forms that capture essential KPI metrics and performance indicators for accurate employee assessment.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={appraisalFormImage}
                                    alt="Employee Performance Appraisal Form for KPI"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Performance Evaluation Methods */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Advanced Evaluation Methods
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Modern evaluation techniques that leverage data analytics and real-time insights to provide comprehensive performance assessments.
                            </p>
                        </div>

                        {/* Right Side - Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={evaluationMethodsImage}
                                    alt="Employee Performance Evaluation Methods"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

