import React from "react";
import BarrierName from "./barrierName";

export default function OurProcess() {
    const inceptionItems = [
        { normal: "Vision", hover: "Creating revolutionary HRM systems with a pioneering personality model." },
        { normal: "Expert Collaboration", hover: "Worked with UK psychometric experts to build a vast database of personality questions." },
        { normal: "Validation", hover: "Achieved remarkable validity score through rigorous procedures." },
        { normal: "Planning", hover: "Carefully designed gamified experience, storyline, settings, and characters." },
        { normal: "Transformation", hover: "Converted personality items into engaging gamification elements." },
        { normal: "Development", hover: "Created an immersive visual novel game that you can use to discover your `true self`.​" }
    ];

    const implementationItems = [
        { normal: "Innovative Report", hover: "Developed the groundbreaking `DEUS Discover` auto-generated report and insightful dashboards." },
        { normal: "Expanding Horizons", hover: "We built a comprehensive strategic people management system, offering diverse HR services accessible via our web platform." },
        { normal: "Early Success", hover: "Welcomed initial clients and HR partners, laying the groundwork for lasting relationships." },
        { normal: "Industry Recognition", hover: "Chosen as one of 17 standout startups from 800+ applicants for KOMINFO's \ Startup Studio Indonesia (SSI) program." },
        { normal: "Exciting Launch", hover: "Officially introduced our game to the market with thorough testing for a seamless experience." },
        { normal: "Continuous Product Expansion", hover: "Currently we have 3 main products, however we are always open to innovating with exciting new products." }
    ];

    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-15">
            <div className="container mx-auto px-6 mb-12">
                {/* Title - Inception */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-left">
                    Inception
                </h2>

                {/* Grid of boxes - 2 rows, 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full lg:h-85 mb-16 lg:mb-24 perspective-[1000px]">
                    {inceptionItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#93bcd7] hover:bg-gray-500 rounded-lg px-6 py-8 text-center text-white font-black text-lg lg:text-2xl md:text-xl flex items-center justify-center min-h-[120px] transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative"
                        >
                            <span className="group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">{item.normal}</span>
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1]">{item.hover}</span>
                        </div>
                    ))}
                </div>

                {/* Title - Implementation */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-left">
                    Implementation
                </h2>

                {/* Grid of boxes - 2 rows, 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full lg:h-85 perspective-[1000px]">
                    {implementationItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-[#d4c7b0] hover:bg-gray-500 rounded-lg px-6 py-8 text-center text-white font-black text-lg lg:text-2xl md:text-xl flex items-center justify-center min-h-[120px] transition-all duration-1000 ease-in-out transform hover:transform-[rotateY(180deg)] cursor-pointer transform-3d relative"
                        >
                            <span className="group-hover:opacity-0 transition-all duration-1000 group-hover:scale-x-[-1]">{item.normal}</span>
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-x-[-1]">{item.hover}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <BarrierName index={1} />
            </div>
        </section>
    );
}

