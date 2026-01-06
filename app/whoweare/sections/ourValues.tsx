import React from "react";
import Image from "next/image";
import innovativeImage from "../images/ourValue/always-innovating-with-our-human-resource-management-planning-1.webp";
import inspiringImage from "../images/ourValue/Inspiring-companies-with-our-hr-saas-services-and-gamification-1.webp";
import investedImage from "../images/ourValue/Always-dedicated-to-corporate-client-human-resource-development-providing-innovative-HR-solutions-employee-training-and-talent-management-services-to-boost-workforce-productivity-and-engagement.webp";
import inclusiveImage from "../images/ourValue/Mendukung-pengembangan-SDM-di-era-digital-dengan-software-HR-dan-gamifikasi-1.webp";
import insightfulImage from "../images/ourValue/DEUS-DIscover-images-35.png";
import improvementImage from "../images/ourValue/Prioritizing-corporate-employee-development-with-innovative-training-programs-talent-management-solutions-and-HR-strategies-2.webp";

export default function OurValues() {
    const values = [
        {
            title: "Innovative",
            image: innovativeImage,
            text: "We are committed to pushing the boundaries of what's possible in the world of human resources. We're constantly innovating to deliver Innovative human resource management systems for Indonesian companies. We embrace HR technology innovation to enhance employee performance management and drive organizational growth and productivity."
        },
        {
            title: "Inspiring",
            image: inspiringImage,
            text: "We aim to inspire positive change, both within our organization and among those we serve. By prioritizing employee development and engagement, we encourage growth and transformation. Our goal is to empower individuals through HR strategies that foster workplace excellence and accountability."
        },
        {
            title: "Invested in our Clients",
            image: investedImage,
            text: "Our clients are our VIP players. We're dedicated to their quest for success, building alliances based on trust and collaboration. Through personalized HR management solutions, we ensure customer satisfaction, so that each client receives strategic support to achieve their goals and maximize talent potential."
        },
        {
            title: "Inclusive",
            image: inclusiveImage,
            text: "We celebrate differences and foster a work culture where everyone's perspectives are valued. Our HR solutions and diversity and inclusion services are designed to create an inclusive company culture where individuals feel empowered and supported in their career growth and professional development journeys."
        },
        {
            title: "Insightful",
            image: insightfulImage,
            text: "We aim to gain a deep understanding of our client's work productivity challenges and workforce opportunities. By leveraging advanced HR analytics, we drive informed decisions and deliver meaningful results that fuel business growth, employee engagement, and innovation."
        },
        {
            title: "Improvement Oriented",
            image: improvementImage,
            text: "We're on a never-ending quest for power-ups. Constant improvement is our main quest, and we're always looking for ways to level up. Through HR management systems and continuous professional development, we ensure that our team and solutions evolve to meet the ever-changing needs of our clients."
        }
    ];

    return (
        <section className="relative bg-[#122430] text-white py-16 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Illustration */}
                            <div className="mb-6 flex justify-center">
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    width={300}
                                    height={300}
                                    className="object-contain"
                                />
                            </div>

                            {/* Heading */}
                            <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 text-center">
                                {value.title}
                            </h3>

                            {/* Text */}
                            <p className="text-base md:text-lg leading-relaxed text-gray-200 text-center">
                                {value.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

