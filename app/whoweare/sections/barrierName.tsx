import React from "react";
import Barrier from "./barrier";

export default function BarrierName() {
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
                        Our Journey in Redefining HRM Systems
                    </h2>
                </div>
            </div>
            <Barrier />
        </div>
    );
}

