import React from "react";

export default function ClickStart() {
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12">
                        Kick Start Today!
                    </h2>

                    {/* CTA Button */}
                    <button className="bg-[#F8E7B9] border border-gray-700 rounded-lg px-8 py-4 text-lg md:text-xl font-semibold text-[#122430] hover:bg-[#f5dca0] transition-colors duration-300 shadow-lg">
                        Book A Free Consultation With Us!
                    </button>
                </div>
            </div>
        </section>
    );
}

