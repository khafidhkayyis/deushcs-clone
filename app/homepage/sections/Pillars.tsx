import React from "react";
import Image from "next/image";
import icon1 from "../images/icon/DEUS-Discover-6-150x150.png";
import icon2 from "../images/icon/DEUS-Discover-8-150x150.png";
import icon3 from "../images/icon/DEUS-Discover-9-150x150.png";

export default function Pillars() {
    return (
        <section className="relative bg-[#f8f7f3] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Pillar 1 - Organizational Enhancement */}
                    <div className="flex flex-col items-center">
                        {/* Icon Circle */}
                        <div className="flex items-center justify-center p-4">
                            <Image
                                src={icon1}
                                alt="Organizational Enhancement"
                                width={150}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                        {/* Text Box */}
                        <div className="w-full bg-[#1a3a4a] rounded-lg py-15 text-center shadow-md">
                            <p className="text-white text-base md:text-lg font-semibold">
                                Organizational Enhancement
                            </p>
                        </div>
                    </div>

                    {/* Pillar 2 - Optimize Talent */}
                    <div className="flex flex-col items-center">
                        {/* Icon Circle */}
                        <div className="flex items-center justify-center p-4">
                            <Image
                                src={icon2}
                                alt="Optimize Talent"
                                width={150}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                        {/* Text Box */}
                        <div className="w-full bg-[#1a3a4a] rounded-lg py-15 text-center shadow-md">
                            <p className="text-white text-base md:text-lg font-semibold">
                                Optimize Talent
                            </p>
                        </div>
                    </div>

                    {/* Pillar 3 - Success Starts Here */}
                    <div className="flex flex-col items-center">
                        {/* Icon Circle */}
                        <div className="flex items-center justify-center p-4">
                            <Image
                                src={icon3}
                                alt="Success Starts Here"
                                width={150}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                        {/* Text Box */}
                        <div className="w-full bg-[#1a3a4a] rounded-lg py-15 text-center shadow-md">
                            <p className="text-white text-base md:text-lg font-semibold">
                                Success Starts Here
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

