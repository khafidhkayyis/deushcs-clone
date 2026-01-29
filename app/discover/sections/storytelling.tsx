import React from "react";
import Image from "next/image";
import backgroundImage from "../images/storytelling/_.jpeg";
import image1 from "../images/storytelling/___1_-removebg-preview.png";
import image2 from "../images/storytelling/___2_-removebg-preview.png";

export default function Storytelling() {
    return (
        <section className="relative w-full min-h-screen py-16 lg:py-24 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover w-full h-full"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">

                {/* Images and Text Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
                    {/* Image 1 */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl order-1 md:order-1">
                        <Image
                            src={image2}
                            alt="Storytelling Image 1"
                            width={500}
                            height={375}
                            className="object-contain w-full h-auto max-w-md mx-auto"
                        />
                    </div>

                    {/* Text in the middle */}
                    <div className="order-2 md:order-2 text-center">
                        <div className="bg-[#8B7355]/90 backdrop-blur-sm rounded-lg p-6 md:p-12 border-2 border-[#6B5D4F] shadow-2xl">
                            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
                                You&apos;re a hero in a medieval realm, on a quest to save a magical kingdom from a devastating plague. But here&apos;s the twist – the game can read your personality and reveal your true self. Are you ready to embark on this extraordinary journey?
                            </p>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl order-3 md:order-3">
                        <Image
                            src={image1}
                            alt="Storytelling Image 2"
                            width={500}
                            height={375}
                            className="object-contain w-full h-auto max-w-md mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


