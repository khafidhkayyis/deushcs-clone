import React from "react";
import Image from "next/image";
import profileImage from "../images/weare.webp";
import Barrier from "./barrier";

export default function WhoWeAre() {
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6 mb-15">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Who We Are
                        </h2>
                        <p className="text-base md:text-4xl lg:leading-10 leading-relaxed text-gray-200 mb-6 font-extralight">
                            Empowering Businessses with Innovative Human Resource Management Systems
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200 mb-6">
                            We help businesses uncover employee potential through innovative HR solutions like gamified assessments and strategic management tools. Combining our passion for games and business psychology, we help empower Indonesian organizations to assess, develop, and enhance their teams for lasting success.
                        </p>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative z-10 order-1 lg:order-2">
                        <Image src={profileImage} alt="DEUS Human Capital Services" width={500} height={500} />
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <Barrier />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-base sm:text-lg md:text-xl lg:text-lg leading-relaxed text-gray-200 space-y-6">
                    <p>
                        At DEUS, our passion for games and dedication in HR Services thrive in organizations drove our journey. Combining our founder&apos;s love for games with expertise in business psychology, we created gamified assessments to empower professional growth. We&apos;ve since evolved to offer comprehensive human resource management services via our strategic people management system. Our solutions enable organizations to assess and strategically develop their most valuable asset: their people. With the support of our advanced HR software solutions, we empower companies to harness the full potential of their workforce. DEUS is rooted in good intentions, DEUS has entered into a strategic partnership with the Ministry of Communication and Information Technology (KOMINFO) for the SSI Program Batch 6. Among 800 startups, we&apos;ve proudly secured a spot as one of the top 17, earning us coaching and support from KOMINFO. This collaboration marks a significant milestone, poised to fuel our growth and pave the way for continued success.
                    </p>
                    <p>
                        DEUS is rooted in good intentions, DEUS has entered into a strategic partnership with the Ministry of Communication and Information Technology (KOMINFO) for the SSI Program Batch 6. Among 800 startups, we&apos;ve proudly secured a spot as one of the top 17, earning us coaching and support from KOMINFO. This collaboration marks a significant milestone, poised to fuel our growth and pave the way for continued success.
                    </p>
                </div>
            </div>
        </section>
    );
}

