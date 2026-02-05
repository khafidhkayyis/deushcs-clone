import React from "react";
import Image from "next/image";
import icon1 from "../images/icon/DEUS-Discover-6-150x150.png";
import icon2 from "../images/icon/DEUS-Discover-8-150x150.png";
import icon3 from "../images/icon/DEUS-Discover-9-150x150.png";

export default function Pillars() {
    return (
        <section className="relative bg-[#f8f7f3] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto perspective-[1000px]">
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
                        <div className="group w-full bg-[#1a3a4a] hover:bg-gray-500 rounded-lg py-15 text-center shadow-md transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative flex items-center justify-center">
                            <span className="text-white text-base md:text-lg font-semibold group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">
                                Organizational Enhancement
                            </span>
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1] text-white text-base md:text-sm px-0 md:px-10 font-semibold">
                                Develop a high performing business through our HR Solutions: gamified assessments, people analytics, performance measurement, comprehensive dashboards and beyond!
                            </span>
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
                        <div className="group w-full bg-[#1a3a4a] hover:bg-gray-500 rounded-lg py-15 text-center shadow-md transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative flex items-center justify-center">
                            <span className="text-white text-base md:text-lg font-semibold group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">
                                Optimize Talent
                            </span>
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1] text-white text-base md:text-sm px-0 md:px-10 font-semibold">
                                Elevate your team to shape your future talent pipeline. We help you select top talent and build high-performing teams for company success.
                            </span>
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
                        <div className="group w-full bg-[#1a3a4a] hover:bg-gray-500 rounded-lg py-15 text-center shadow-md transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative flex items-center justify-center">
                            <span className="text-white text-base md:text-lg font-semibold group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">
                                Success Starts Here
                            </span>
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1] text-white text-base md:text-sm px-0 md:px-10 font-semibold">
                                Knowing yourself and others is the key to success for you, your team and your organization
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

