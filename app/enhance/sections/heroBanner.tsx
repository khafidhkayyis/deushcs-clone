import React from "react";
import Image from "next/image";
import heroBannerImage from "../images/DEUS-Enhance-for-KPI-Management-r5qsxu0jv9ibert6fqpn48rw8yga1xyc8r3uziyodm.webp";

export default function HeroBanner() {
    return (
        <section className="relative bg-[#122430] text-white overflow-hidden">
            <div className="container mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    {/* Left Side - Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl lg:text-4xl font-black mb-6 leading-tight">
                            Business Performance Measurement Made Simple, but Effective
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extralight mb-6">
                            DEUS Enhance: KPI & Performance Management Tool for Optimized Employee Performance
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            DEUS Enhance transforms the landscape of performance appraisal by delivering insightful, data-driven analysis that enables your organization to grow. By aligning KPI with performance appraisal, we can help Indonesian Businesses to help employee growth and development.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative order-1 lg:order-2 lg:flex lg:justify-center">
                        <Image
                            src={heroBannerImage}
                            alt="DEUS Enhance KPI Management"
                            width={350}
                            height={350}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

