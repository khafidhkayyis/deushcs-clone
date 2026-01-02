import React from "react";
import Image, { StaticImageData } from "next/image";
import telkomLogo from "../images/logoclient/telkom-indonesia.png";
import bogaLogo from "../images/logoclient/boga-group-logo.png";
import delamibrandLogo from "../images/logoclient/Delamibrands.png";
import sarinahLogo from "../images/logoclient/Sarinah.png";
import bcgLogo from "../images/logoclient/bcglogo.jpeg";
import sphLogo from "../images/logoclient/SPH-logo.png";
import omosandoLogo from "../images/logoclient/Omosando-logo.png";
import heliosClientLogo from "../images/logoclient/Helios-logo.png";
import healthyLogo from "../images/logoclient/healthy-logo.webp";
import glamifyLogo from "../images/logoclient/Glamify-Logo.png";
import aciLogo from "../images/logopatners/aci-logo.png";
import agateLogo from "../images/logopatners/agate-logo.png";
import firstasiaLogo from "../images/logopatners/firstasia-logo.png";
import haierdLogo from "../images/logopatners/Haierd-logo.jpeg";
import heliosPartnerLogo from "../images/logopatners/Helios-logo.png";
import imbLogo from "../images/logopatners/imb-logo.png";
import optimusLogo from "../images/logopatners/optimus-logo.png";
import proactLogo from "../images/logopatners/ProAct-logo.png";
import sdmLogo from "../images/logopatners/SDM-logo.jpg";
import tripleLogo from "../images/logopatners/triple-logo.jpeg";

interface LogoItem {
    name: string;
    alt: string;
    image: StaticImageData;
    width?: number;
    height?: number;
}

const allLogos: LogoItem[] = [
    {
        name: "Sarinah",
        alt: "Sarinah Logo",
        image: sarinahLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Telkom Indonesia",
        alt: "Telkom Indonesia Logo",
        image: telkomLogo,
        width: 100,
        height: 60,
    },
    {
        name: "BOGA GROUP",
        alt: "BOGA GROUP Logo",
        image: bogaLogo,
        width: 100,
        height: 60,
    },
    {
        name: "DELAMIBRANDS",
        alt: "DELAMIBRANDS Logo",
        image: delamibrandLogo,
        width: 100,
        height: 60,
    },
    {
        name: "BCG",
        alt: "BCG Logo",
        image: bcgLogo,
        width: 100,
        height: 60,
    },
    {
        name: "SPH",
        alt: "SPH Logo",
        image: sphLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Omosando",
        alt: "Omosando Logo",
        image: omosandoLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Helios Client",
        alt: "Helios Client Logo",
        image: heliosClientLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Healthy",
        alt: "Healthy Logo",
        image: healthyLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Glamify",
        alt: "Glamify Logo",
        image: glamifyLogo,
        width: 100,
        height: 60,
    },
    {
        name: "ACI",
        alt: "ACI Logo",
        image: aciLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Agate",
        alt: "Agate Logo",
        image: agateLogo,
        width: 100,
        height: 60,
    },
    {
        name: "First Asia",
        alt: "First Asia Logo",
        image: firstasiaLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Haierd",
        alt: "Haierd Logo",
        image: haierdLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Helios Partner",
        alt: "Helios Partner Logo",
        image: heliosPartnerLogo,
        width: 100,
        height: 60,
    },
    {
        name: "IMB",
        alt: "IMB Logo",
        image: imbLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Optimus",
        alt: "Optimus Logo",
        image: optimusLogo,
        width: 100,
        height: 60,
    },
    {
        name: "ProAct",
        alt: "ProAct Logo",
        image: proactLogo,
        width: 100,
        height: 60,
    },
    {
        name: "SDM",
        alt: "SDM Logo",
        image: sdmLogo,
        width: 100,
        height: 60,
    },
    {
        name: "Triple",
        alt: "Triple Logo",
        image: tripleLogo,
        width: 100,
        height: 60,
    },
];

export default function Scrolllogo() {
    return (
        <section className="relative bg-[#f8f7f3] py-12 md:py-16 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative w-full">
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll">
                            {allLogos.map((logo, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="shrink-0 mx-8 flex items-center justify-center h-20 w-[100px]"
                                >
                                    <Image
                                        src={logo.image}
                                        alt={logo.alt}
                                        width={logo.width || 100}
                                        height={logo.height || 60}
                                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex animate-scroll" aria-hidden="true">
                            {allLogos.map((logo, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="shrink-0 mx-8 flex items-center justify-center h-20 w-[100px]"
                                >
                                    <Image
                                        src={logo.image}
                                        alt={logo.alt}
                                        width={logo.width || 100}
                                        height={logo.height || 60}
                                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

