import React from "react";
import BarrierLine from "./barrierLine";

interface BarrierItem {
  text: string;
  bgColor: string;
  textColor: string;
}

interface BarrierProps {
  items?: BarrierItem[];
  index?: number;
}

export const defaultItems: BarrierItem[] = [
  {
    text: "Why Choose Us?",
    bgColor: "#f8f7f3",
    textColor: "#1e293b",
  },
  {
    text: "Client and Partnerships",
    bgColor: "#122430",
    textColor: "#f8f7f3",
  },
];

export default function Barrier({ items = defaultItems, index }: BarrierProps) {
  // If index is provided, show only that specific item
  const displayItems = index !== undefined
    ? [items[index]].filter(Boolean) // Filter out undefined if index is out of bounds
    : items;

  return (
    <div className="relative w-full">
      <BarrierLine />
      {displayItems.map((item, idx) => (
        <div
          key={idx}
          className="py-12 md:py-16"
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-center"
              style={{ color: item.textColor }}
            >
              {item.text}
            </h2>
          </div>
        </div>
      ))}
      <BarrierLine />
    </div>
  );
}

