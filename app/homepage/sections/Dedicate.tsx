import React from "react";
import Image from "next/image";
import dedicateImage from "../images/DEUS-Dedicate.webp";
import { defaultItems } from "./Barrier";

export default function Dedicate() {
    const clientPartnershipsItem = defaultItems[1];

    return (
        <>
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

            <section className="relative bg-[#ffffff] text-[#122430] py-16 lg:py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-8">
                            Let&apos;s Get Started
                        </h2>
                        <button className="bg-[#ffeb3b] border-2 border-[#122430] rounded-full px-8 py-3 text-xl font-semibold text-[#122430] hover:bg-[#ffd700] transition-colors duration-300">
                            Book Your Free Consultation With Us!
                        </button>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section
                className="relative py-16 lg:py-24"
                style={{ backgroundColor: clientPartnershipsItem.bgColor }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2
                            className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-8"
                            style={{ color: clientPartnershipsItem.textColor }}
                        >
                            {clientPartnershipsItem.text}
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
}

