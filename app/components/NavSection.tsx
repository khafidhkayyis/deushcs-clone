"use client";

import { useState } from "react";

export default function NavSection() {
    const [selectedValue, setSelectedValue] = useState("Button 1");

    return (
        <>
            <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="md:hidden border border-white text-white bg-transparent px-4 py-2 w-full"
            >
                <option value="Button 1" className="bg-[#122430]">Button 1</option>
                <option value="Button 2" className="bg-[#122430]">Button 2</option>
                <option value="Button 3" className="bg-[#122430]">Button 3</option>
                <option value="Button 4" className="bg-[#122430]">Button 4</option>
                <option value="Button 5" className="bg-[#122430]">Button 5</option>
            </select>
            <div className="hidden md:flex md:flex-row gap-4">
                <button className="border border-white text-white px-4 py-2">
                    Button 1
                </button>
                <button className="border border-white text-white px-4 py-2">
                    Button 2
                </button>
                <button className="border border-white text-white px-4 py-2">
                    Button 3
                </button>
                <button className="border border-white text-white px-4 py-2">
                    Button 4
                </button>
                <button className="border border-white text-white px-4 py-2">
                    Button 5
                </button>
            </div>
        </>
    );
}
