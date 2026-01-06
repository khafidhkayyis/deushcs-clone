import React from "react";

export default function OurProcess() {
    const inceptionItems = [
        "Vision",
        "Expert Collaboration",
        "Validation",
        "Planning",
        "Transformation",
        "Development"
    ];

    const implementationItems = [
        "Innovative Report",
        "Expanding Horizons",
        "Early Success",
        "Industry Recognition",
        "Exciting Launch",
        "Continuous Product Expansion"
    ];

    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                {/* Title - Inception */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-left">
                    Inception
                </h2>

                {/* Grid of boxes - 2 rows, 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full lg:h-85 mb-16 lg:mb-24">
                    {inceptionItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#93bcd7] rounded-lg px-6 py-8 text-center text-white font-black text-lg lg:text-2xl md:text-xl flex items-center justify-center min-h-[120px]"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Title - Implementation */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-left">
                    Implementation
                </h2>

                {/* Grid of boxes - 2 rows, 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full lg:h-85">
                    {implementationItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#d4c7b0] rounded-lg px-6 py-8 text-center text-white font-black text-lg lg:text-2xl md:text-xl flex items-center justify-center min-h-[120px]"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

