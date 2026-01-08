import React from "react";

export default function KickStart() {
    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                    {/* Quote */}
                    <p className="text-xl md:text-2xl lg:text-3xl italic mb-12 text-gray-200">
                        Join the new era and choose DEUS for assessments that are engaging, digital, and highly insightful.
                    </p>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12">
                        Kick Start Today!
                    </h2>

                    {/* CTA Button */}
                    <button className="bg-[#F8E7B9] border border-[#122430] rounded-lg px-8 py-4 text-lg md:text-xl font-semibold text-[#122430] hover:bg-[#f5dca0] transition-colors duration-300 shadow-lg">
                        Book Your Free Consultation With Us!
                    </button>
                </div>
            </div>
        </section>
    );
}

