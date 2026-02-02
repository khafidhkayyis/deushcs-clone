"use client";

import { useState } from "react";

const navItems = [
    "Effortless Candidate Shortlisting",
    "Identify Future Leaders",
    "Competency Fit Insight",
    "Gap Analysis",
    "Retain your Top Performers"
];

export default function NavSection() {
    const [selectedValue, setSelectedValue] = useState(navItems[0]);

    return (
        <>
            <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="md:hidden border border-white text-white bg-transparent px-4 py-2 w-full"
            >
                {navItems.map((item) => (
                    <option key={item} value={item} className="bg-[#122430]">
                        {item}
                    </option>
                ))}
            </select>
            <div className="hidden md:flex md:flex-row gap-4">
                {navItems.map((item) => (
                    <button
                        key={item}
                        className="border border-white text-white px-4 py-2 hover:bg-gray-500 transition-colors"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </>
    );
}
