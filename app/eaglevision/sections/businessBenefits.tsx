"use client";

import React, { useState } from "react";
import Image from "next/image";
import mobileAppImage from "../images/busubessBenefits/DEUS-DIscover-images-23-1-qz4bal8l3bwbyoe7fbjurua0jz77ak3ru9fbu52cg8.png";
import inventoryImage from "../images/busubessBenefits/DEUS-DIscover-images-46-qz9g0ri1kjhgh4n92w84ioxwgpc7fiu1hkepjosako.png";
import businessAnalyticsImage from "../images/busubessBenefits/business-analytics.png";
import salesByProductImage from "../images/busubessBenefits/sales-by-product-and-category.png";
import productListingImage from "../images/busubessBenefits/DEUS-DIscover-images-30-qz8z9nc2efv50epdup0t5dxitc0pj1i8wf5x5514zs.png";

function AnalyticsCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselImages = [
        { src: businessAnalyticsImage, alt: "Eagle Vision - Business Analytics Dashboard" },
        { src: salesByProductImage, alt: "Eagle Vision - Sales by Product and Category" }
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

export default function BusinessBenefits() {
    return (
        <>
            {/* Employee Performance Monitoring */}
            <section className="relative bg-[#122430] text-white py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Mobile App Image */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={mobileAppImage}
                                    alt="Eagle Vision - Mobile App Interface"
                                    width={600}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                <p>
                                    Monitor employee performance and task progress in real-time with our operational excellence system.
                                </p>
                                <p>
                                    Enhance oversight of employee activities and project timelines through effective task management solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-Time Inventory Management */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Implement real-time inventory management to ensure optimal stock levels, mitigate losses, and enhance overall customer satisfaction.
                            </p>
                        </div>

                        {/* Right Side - Inventory Management Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={inventoryImage}
                                    alt="Eagle Vision - Inventory Management Interface"
                                    width={600}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data-Driven Business Analytics */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Analytics Carousel */}
                        <div className="relative z-10 order-1 lg:order-1">
                            <AnalyticsCarousel />
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-2">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                Utilize data-driven business analytics tools embedded within the platform to make informed, data-driven decisions. Monitor daily sales, transaction volumes, and advancements towards objectives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* User-Friendly Store Management */}
            <section className="relative bg-[#122430] text-white py-10 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="relative z-10 order-2 lg:order-1">
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                                A user-friendly feature designed to guarantee store cleanliness, maximum customer comfort, store readiness and more. Easily identify problems by incorporating photos and comments in tasks, maintaining the company&apos;s standards.
                            </p>
                        </div>

                        {/* Right Side - Product Listing Image */}
                        <div className="relative z-10 order-1 lg:order-2">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                <Image
                                    src={productListingImage}
                                    alt="Eagle Vision - Product Listing Interface"
                                    width={600}
                                    height={400}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

