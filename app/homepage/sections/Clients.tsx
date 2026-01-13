import React from "react";
import Image, { StaticImageData } from "next/image";
import telkomLogo from "../images/logoclient/telkom-indonesia.png";
import bogaLogo from "../images/logoclient/boga-group-logo.png";
import delamibrandLogo from "../images/logoclient/Delamibrands.png";
import sarinahLogo from "../images/logoclient/Sarinah.png";
import bcgLogo from "../images/logoclient/bcglogo.jpeg";
import sphLogo from "../images/logoclient/SPH-logo.png";
import omosandoLogo from "../images/logoclient/Omosando-logo.png";
import heliosLogo from "../images/logoclient/Helios-logo.png";
import healthyLogo from "../images/logoclient/healthy-logo.webp";
import glamifyLogo from "../images/logoclient/Glamify-Logo.png";


interface ClientItem {
    name: string;
    alt: string;
    type: "image" | "text" | "placeholder";
    image?: StaticImageData;
    textStyle?: string;
    width?: number;
    height?: number;
}

const clients: ClientItem[] = [
    {
        name: "Sarinah",
        alt: "Sarinah Logo",
        type: "image",
        image: sarinahLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Telkom Indonesia",
        alt: "Telkom Indonesia",
        type: "image",
        image: telkomLogo,
        width: 200,
        height: 60,
    },
    {
        name: "BOGA GROUP",
        alt: "BOGA GROUP",
        type: "image",
        image: bogaLogo,
        width: 200,
        height: 60,
    },
    {
        name: "DELAMIBRANDS",
        alt: "DELAMIBRANDS",
        type: "image",
        image: delamibrandLogo,
        width: 200,
        height: 60,
    },
    {
        name: "BCG",
        alt: "BCG Logo",
        type: "image",
        image: bcgLogo,
        width: 200,
        height: 60,
    },
    {
        name: "SPH",
        alt: "SPH Logo",
        type: "image",
        image: sphLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Omosando",
        alt: "Omosando Logo",
        type: "image",
        image: omosandoLogo,
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
        name: "Healthy",
        alt: "Healthy Logo",
        type: "image",
        image: healthyLogo,
        width: 200,
        height: 60,
    },
    {
        name: "Glamify",
        alt: "Glamify Logo",
        type: "image",
        image: glamifyLogo,
        width: 200,
        height: 60,
    },
];

export default function Sponsored() {
    return (
        <section className="relative bg-[#f8f7f3] py-12 md:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-[#1e293b] text-center mb-[80px]">
                    Our Clients
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[80px] md:gap-[100px] lg:gap-[110px] items-center justify-items-center">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center h-16 md:h-20 w-full ${client.type === "placeholder" ? "w-20 md:w-24" : ""
                                }`}
                        >
                            {client.type === "image" && client.image && (
                                <Image
                                    src={client.image}
                                    alt={client.alt}
                                    width={client.width || 120}
                                    height={client.height || 60}
                                    className="object-contain"
                                />
                            )}
                            {client.type === "text" && (
                                <span className={client.textStyle}>{client.name}</span>
                            )}
                            {client.type === "placeholder" && (
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

