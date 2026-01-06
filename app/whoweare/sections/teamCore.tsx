import React from "react";
import Image from "next/image";
import christianPhoto from "../images/teamCore/Christian-Kurnia-pj9v7vr7cpnetiho4w3ixsz9rj9nhlqsmo860kku6o.jpg";
import gregoryPhoto from "../images/teamCore/Gregory-Kurnia-pj9viyarugszk6erhodcb0epmwpa59ozhgu1hw5wwg.jpg";

export default function TeamCore() {
    return (
        <section className="relative bg-[#f8f7f3] text-[#122430] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-16">
                    Meet Our Core Team
                </h2>

                {/* Team Members */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Christian Kurnia */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 md:w-72 md:h-72 rounded-[40px] overflow-hidden mb-8 shadow-lg">
                            <Image
                                src={christianPhoto}
                                alt="Christian Kurnia"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Christian Kurnia, B.E.
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-gray-700 mb-6">
                            Senior Business Advisor
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-xl">
                            Senior business executive and retail expert with 25+ years of business experience.
                            Climbed up the career ladder and ended up becoming the director of e-business in
                            Metrodata Electronics. He then joined Matahari Department Store and oversaw the
                            development of 160+ stores across Indonesia, overseeing an increase of revenue from
                            6T to 19T.
                        </p>
                    </div>

                    {/* Gregory Kurnia */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 md:w-72 md:h-72 rounded-[40px] overflow-hidden mb-8 shadow-lg">
                            <Image
                                src={gregoryPhoto}
                                alt="Gregory Kurnia"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            Gregory Kurnia
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-gray-700 mb-6">
                            CEO
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-xl">
                            Graduated with honors from Los Angeles for his B.A. in Psychology with a Minor in
                            Sociology and Theology and received second degree honors for his M.Sc. of
                            Organizational Psychology from City University of London. He is also a certified
                            psychometric practitioner and a Member of the Association of Business Psychologists.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


