import React from "react";
import Image from "next/image";
import smartImage from "../images/DEUS-Smart.webp";

export default function Smart() {
    return (
        <section className="relative bg-[#ffffff] text-[#122430] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Performance Management Interface */}
                    <div className="relative z-10 order-1 lg:order-1">
                        <Image src={smartImage} alt="Smart Employee Performance Management" width={500} height={500} />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-6 leading-tight">
                            Smart & Fair Employee Performance Management
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
                            Evaluate team performance accurately using real-time KPI tracking, performance appraisal systems, and smart analytics.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Make HRM decisions transparent, objective, and results driven.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


