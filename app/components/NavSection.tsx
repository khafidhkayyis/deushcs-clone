"use client";

import { useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function NavSection() {
    const { t } = useTranslation();
    
    const navItems = [
        { label: t('homepage.navSection.effortlessShortlisting'), id: "effortless-shortlisting" },
        { label: t('homepage.navSection.identifyLeaders'), id: "identify-leaders" },
        { label: t('homepage.navSection.competencyFit'), id: "competency-fit" },
        { label: t('homepage.navSection.gapAnalysis'), id: "gap-analysis" },
        { label: t('homepage.navSection.retainPerformers'), id: "retain-performers" }
    ];
    const [selectedValue, setSelectedValue] = useState(navItems[0].id);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value;
        setSelectedValue(id);
        scrollToSection(id);
    };

    const handleButtonClick = (id: string) => {
        scrollToSection(id);
    };

    return (
        <>
            <select
                value={selectedValue}
                onChange={handleSelectChange}
                className="md:hidden border border-white text-white bg-transparent px-4 py-2 mx-auto block"
            >
                {navItems.map((item) => (
                    <option key={item.id} value={item.id} className="bg-[#122430]">
                        {item.label}
                    </option>
                ))}
            </select>
            <div className="hidden md:flex md:flex-row gap-4">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleButtonClick(item.id)}
                        className="border border-white text-white px-4 py-2 hover:bg-gray-500 transition-colors"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    );
}
