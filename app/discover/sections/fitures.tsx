import React from "react";
import Image from "next/image";
import heroesImage from "../images/kastil.jpeg";
import backgroundImage from "../images/DEUS-Discover-Gamified-Assessments-Indonesia.webp";

export default function Features() {
    return (
        <section className="relative text-white py-16 lg:py-24 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroesImage}
                    alt="Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* Left Side - Text Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Fully Immersive Experience
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                            Say goodbye to traditional assessments. DEUS&apos; Gamified Assessment offers a fresh, engaging approach that measures skills and competencies like never before.
                        </p>
                    </div>

                    {/* Right Side - Heroes of a Fallen Land Illustration */}
                    <div className="relative z-10 order-1 lg:order-2">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src={backgroundImage}
                                alt="HEROES OF A FALLEN LAND - Gamified Assessment"
                                width={600}
                                height={400}
                                className="object-cover w-full h-auto"
                            />
                            {/* Overlay text for "HEROES OF A FALLEN LAND" */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-2">
                                        HEROES
                                    </h3>
                                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-1">
                                        OF A
                                    </p>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                        FALLEN LAND
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

