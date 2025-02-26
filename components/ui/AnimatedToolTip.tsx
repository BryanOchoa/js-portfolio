"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX } = event;
    x.set(clientX);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.id}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative"
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: x,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute top-full left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black-200 z-50 shadow-xl px-4 py-2 mt-2"
              >
                <div className="absolute inset-x-0 z-30 w-full -top-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute inset-x-0 z-30 w-full -top-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
};
