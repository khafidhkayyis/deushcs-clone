import React from "react";
import Image from "next/image";
import profileImage from "../images/DEUS-Profile.webp";

export default function Profile() {
    return (
        <section className="relative bg-[#ffffff] text-[#122430] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Laptop with Gamified Assessment */}
                    <div className="relative z-10 order-1 lg:order-1">
                        <Image src={profileImage} alt="Gamified Assessment Interface" width={500} height={500} />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold mb-6 leading-tight">
                            Pioneering Gamified Assessment in Indonesia
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            DEUS stands at the forefront of gamified assessment solutions in Indonesia. Our pioneering approach sets the standard for more accurate, data-driven insights that empower organizations to make informed decisions about their talent.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

