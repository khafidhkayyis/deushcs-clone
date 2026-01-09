import React from "react";
import Barrier from "./barrier";

const titles = [
    "Eagle Vision Core Values",
    "What is Gamification in Assessments?",
    "Gamified Assessment Benefits for Organizations"
];

const descriptions = [
    "For the Best Interest of Clients",
    undefined,
    undefined
];

function BarrierSection({ title, description }: { title: string; description?: string }) {
    return (
        <div>
            <Barrier />
            <div className="relative w-full bg-[#f8f7f3] py-12 md:py-16 lg:py-15 overflow-hidden">
                {/* Top diagonal line effect */}
                <div
                    className="absolute top-0 left-0 w-full h-px bg-gray-300/60"
                    style={{
                        transform: 'rotate(-1deg)',
                        transformOrigin: 'left center'
                    }}
                ></div>

                {/* Bottom diagonal line effect */}
                <div
                    className="absolute bottom-0 left-0 w-full h-px bg-gray-300/60"
                    style={{
                        transform: 'rotate(1deg)',
                        transformOrigin: 'left center'
                    }}
                ></div>

                {/* Centered text */}
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a2a3a]">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-base md:text-lg lg:text-xl text-[#1a2a3a] mt-4 max-w-4xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>
            <Barrier />
        </div>
    );
}

interface BarrierNameProps {
    index?: number;
}

export default function BarrierName({ index }: BarrierNameProps) {
    if (index !== undefined) {
        return <BarrierSection title={titles[index]} description={descriptions[index]} />;
    }

    return (
        <>
            {titles.map((title, idx) => (
                <BarrierSection key={idx} title={title} description={descriptions[idx]} />
            ))}
        </>
    );
}

