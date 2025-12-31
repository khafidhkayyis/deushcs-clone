import React from "react";
import Image from "next/image";
import empowerImage from "../images/DEUS-Empower.webp";

export default function Empower() {
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Digital Transformation */}
                    <div className="relative z-10 order-1 lg:order-1">
                        <Image src={empowerImage} alt="Digital Transformation" width={500} height={500} />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-6 leading-tight">
                            Empower Your Company&apos;s Digital Transformation with DEUS
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            Integrating modern technologies to enhance your talent management and employee performance strategies. DEUS offers a fully automated solution that streamlines your processes, allowing you to focus on what matters.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


