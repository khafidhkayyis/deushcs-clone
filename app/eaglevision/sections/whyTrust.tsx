"use client";

import React, { useState } from "react";
import Image from "next/image";
import dashboardImage from "../images/whyTrust/DEUS-DIscover-images-44.png";
import mobileAppImage from "../images/whyTrust/DEUS-DIscover-images-17-1024x1024.png";
import mobileAppImage2 from "../images/whyTrust/DEUS-DIscover-images-47-1024x1024.png";
import costEfficientImage from "../images/whyTrust/DEUS-DIscover-images-19.png";
import teamCollaborationImage from "../images/whyTrust/DEUS-DIscover-images-20.png";
import userCentricImage from "../images/whyTrust/DEUS-DIscover-images-21.png";
import userCentricImage2 from "../images/whyTrust/DEUS-DIscover-images-22.png";

function MobileAppCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImages = [
        { src: mobileAppImage, alt: "Eagle Vision - Mobile App Interface" },
        { src: mobileAppImage2, alt: "Eagle Vision - Mobile App Interface 2" }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <Image
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                width={600}
                height={400}
                className="object-contain w-full h-auto"
            />

            {/* Carousel Navigation Buttons */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function UserCentricCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImages = [
        { src: userCentricImage, alt: "Eagle Vision - User Centric Design Dashboard" },
        { src: userCentricImage2, alt: "Eagle Vision - User Centric Design Dashboard 2" }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <Image
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                width={600}
                height={400}
                className="object-contain w-full h-auto"
            />

            {/* Carousel Navigation Buttons */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function WhyTrust() {
    return (
        <>
            {/* Real-Time Visibility Across Operations */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Real-Time Visibility Across Operations
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Monitor employee attendance, track task progress, and manage inventory seamlessly through the business dashboard that operates in real-time. Benefit from the convenience of accessing Eagle Vision&apos;s dashboard on both mobile devices and desktop platforms.
                            </p>
                        </div>

                        {/* Right Side - Dashboard Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={dashboardImage}
                                    alt="Eagle Vision - Special Task Dashboard"
                                    width={600}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Increase Productivity with Centralized Tools */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Mobile App Image Carousel */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <MobileAppCarousel />
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Increase Productivity with Centralized Tools
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Integrate task management and performance tools to simplify planning, organization, and execution of tasks, ensuring greater productivity among your workforce.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Efficient */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Cost Efficient
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Optimize resource utilization by reducing instances of missed deadlines, preventing stock shortages, and mitigating potential sales losses through the implementation of real-time operational insights.
                            </p>
                        </div>

                        {/* Right Side - Cost Efficient Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={costEfficientImage}
                                    alt="Eagle Vision - Cost Efficient Operations"
                                    width={600}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhance Team Collaboration */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Team Collaboration Image */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={teamCollaborationImage}
                                    alt="Eagle Vision - Team Collaboration"
                                    width={600}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                Enhance Team Collaboration
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Assign and track tasks continuously, improving team coordination and employee performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Centric Design */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                User Centric Design
                            </h2>
                            <div className="space-y-4 text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                <p>
                                    Designed for user-friendly navigation, ensuring all team members, regardless of tech proficiency, can operate the system smoothly.
                                </p>
                                <p>
                                    Tailored modules to meet specific client needs with a centralized platform to manage all kinds of operational tasks in the company. This provides extra convenience and allows higher efficiency in your day to day operations.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - User Centric Design Image Carousel */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <UserCentricCarousel />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

