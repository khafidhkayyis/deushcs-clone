import React from "react";
import Image from "next/image";
import profileImage from "../images/weare.webp";

export default function WhoWeAre() {
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold mb-6 leading-tight">
                            Who We Are
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-6">
                            DEUS Human Capital Services is a leading provider of innovative HR solutions and gamified assessment platforms in Indonesia. We are dedicated to transforming how businesses discover, develop, and optimize their talent.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-6">
                            Our mission is to empower Indonesian companies with cutting-edge technology that makes talent management more efficient, engaging, and effective. Through our comprehensive suite of HR services, we help organizations build high-performing teams and drive sustainable growth.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            With expertise in people analytics, performance measurement, and strategic HR consulting, DEUS is your trusted partner in building a workforce that drives excellence and innovation.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative z-10 order-1 lg:order-2">
                        <Image src={profileImage} alt="DEUS Human Capital Services" width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    );
}

