import React from "react";

const videoFileName = "Screen Recording 2026-01-12 at 14.53.55.mov";

export default function Video() {
    return (
        <section className="relative bg-[#f8f7f3] text-[#122430] py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-8 lg:mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Watch How It Works
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                            Experience our gamified assessment platform in action. See how we transform traditional recruitment and employee development processes into engaging, effective solutions.
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
                        <div className="aspect-video bg-black">
                            <video
                                className="w-full h-full object-contain"
                                controls
                                preload="metadata"
                                playsInline
                            >
                                <source
                                    src={`/videos/${encodeURIComponent(videoFileName)}`}
                                    type="video/quicktime"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Additional Text */}
                    <div className="mt-8 lg:mt-12 text-center">
                        <p className="text-base md:text-lg text-gray-600">
                            Discover how gamified assessments can revolutionize your talent acquisition and development strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

