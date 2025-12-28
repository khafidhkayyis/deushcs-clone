import React from "react";
import Image from "next/image";
import smarterImage from "../images/DEUS-Smarter.webp";

export default function Smarter() {
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Person with Headset */}
                    <div className="relative z-10 order-1 lg:order-1">
                        <Image src={smarterImage} alt="Smarter Operations" width={500} height={500} />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-6 leading-tight">
                            Smarter Operations, Stronger Results
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            Empower businesses with real-time operational control: track attendance, manage inventory, and enhance your business operations strategy seamlessly. Enhance productivity, reduce costs, and ensure compliance, all from one centralized platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

