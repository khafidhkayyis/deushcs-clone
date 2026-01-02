import React from "react";
import Image, { StaticImageData } from "next/image";
import aciLogo from "../images/logopatners/aci-logo.png";
import agateLogo from "../images/logopatners/agate-logo.png";
import firstasiaLogo from "../images/logopatners/firstasia-logo.png";
import haierdLogo from "../images/logopatners/Haierd-logo.jpeg";
import heliosLogo from "../images/logopatners/Helios-logo.png";
import imbLogo from "../images/logopatners/imb-logo.png";
import optimusLogo from "../images/logopatners/optimus-logo.png";
import proactLogo from "../images/logopatners/ProAct-logo.png";
import sdmLogo from "../images/logopatners/SDM-logo.jpg";
import tripleLogo from "../images/logopatners/triple-logo.jpeg";


interface PartnerItem {
    name: string;
    alt: string;
    type: "image" | "text" | "placeholder";
    image?: StaticImageData;
    textStyle?: string;
    width?: number;
    height?: number;
}

const partners: PartnerItem[] = [
    {
        name: "ACI",
        alt: "ACI Logo",
        type: "image",
        image: aciLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Agate",
        alt: "Agate Logo",
        type: "image",
        image: agateLogo,
        width: 200,
        height: 60,
    },
    {
        name: "First Asia",
        alt: "First Asia Logo",
        type: "image",
        image: firstasiaLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Haierd",
        alt: "Haierd Logo",
        type: "image",
        image: haierdLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Helios",
        alt: "Helios Logo",
        type: "image",
        image: heliosLogo,
        width: 200,
        height: 60,
    },
    {
        name: "IMB",
        alt: "IMB Logo",
        type: "image",
        image: imbLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Optimus",
        alt: "Optimus Logo",
        type: "image",
        image: optimusLogo,
        width: 200,
        height: 60,
    },
    {
        name: "ProAct",
        alt: "ProAct Logo",
        type: "image",
        image: proactLogo,
        width: 200,
        height: 60,
    },
    {
        name: "SDM",
        alt: "SDM Logo",
        type: "image",
        image: sdmLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Triple",
        alt: "Triple Logo",
        type: "image",
        image: tripleLogo,
        width: 200,
        height: 60,
    },
];

export default function Patners() {
    return (
        <section className="relative bg-[#f8f7f3] py-12 md:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-[#1e293b] text-center mb-[80px]">
                    Our Partners
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[80px] md:gap-[100px] lg:gap-[110px] items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center h-16 md:h-20 w-full ${partner.type === "placeholder" ? "w-20 md:w-24" : ""
                                }`}
                        >
                            {partner.type === "image" && partner.image && (
                                <Image
                                    src={partner.image}
                                    alt={partner.alt}
                                    width={partner.width || 120}
                                    height={partner.height || 60}
                                    className="object-contain"
                                />
                            )}
                            {partner.type === "text" && (
                                <span className={partner.textStyle}>{partner.name}</span>
                            )}
                            {partner.type === "placeholder" && (
                                <div className="w-full h-full bg-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xs font-semibold">Logo</span>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="col-span-2 md:col-span-3 lg:col-span-5 flex justify-end items-center w-full">
                        <p className="text-[#1e293b] text-4xl font-semibold text-right w-full">And many more!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

