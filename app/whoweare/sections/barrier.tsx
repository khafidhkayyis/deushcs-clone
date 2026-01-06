import React from "react";

export default function Barrier() {
    return (
        <div className="relative w-full h-2 md:h-20 lg:h-5 overflow-hidden">
            {/* Top subtle line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gray-400/50 z-10"></div>

            {/* Bottom subtle line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-400/50 z-10"></div>

            {/* Lower-left section - darker blue-grey */}
            <div
                className="absolute inset-0 bg-[#4a5a6b]"
                style={{
                    clipPath: 'polygon(0 0, 0 100%, 100% 0)'
                }}
            ></div>

            {/* Upper-right section - lighter blue-grey */}
            <div
                className="absolute inset-0 bg-[#6b7d8f]"
                style={{
                    clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
                }}
            ></div>
        </div>
    );
}

