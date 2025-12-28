import React from "react";
import Image from "next/image";
import dedicateImage from "../images/DEUS-Dedicate.webp";

export default function Dedicate() {
    return (
        <section className="relative bg-[#ffffff] text-[#122430] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Handshake */}
                    <div className="relative z-10 order-1 lg:order-1">
                        <Image src={dedicateImage} alt="Business Partnership" width={500} height={500} />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-6 leading-tight">
                            Dedicated to Serving Indonesian Businesses with Excellent HR Services
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            With tailored HR services designed to meet unique organizational goals. DEUS&apos; commitment is to serve our clients with the utmost care and dedication. We pride ourselves on going above and beyond to meet your needs and ensure your satisfaction. Your success is our top priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

