"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { VscNote } from "react-icons/vsc";
import { BsTools } from "react-icons/bs";
import { TbAdjustmentsCode } from "react-icons/tb";
import { FaAward } from "react-icons/fa";
import { GoRocket } from "react-icons/go";

const DevopsSolutionCycle = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const calculatePositions = () => {
      const containerSize = window.innerWidth < 640 ? 240 : 340;
      const radius = containerSize === 240 ? 110 : 160;
      const centerX = containerSize / 2;
      const centerY = containerSize / 2;
      const angleStep = (2 * Math.PI) / 6;
      const iconContainerSize = containerSize === 240 ? 60 : 90;

      const newPositions = Array.from({ length: 6 }, (_, i) => ({
        left: `${centerX + radius * Math.cos(i * angleStep) - iconContainerSize / 2}px`,
        top:  `${centerY + radius * Math.sin(i * angleStep) - iconContainerSize / 2}px`,
      }));

      setPositions(newPositions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  const icons = [
    { icon: <AiOutlineFileSearch size={40} /> },
    { icon: <VscNote size={40} /> },
    { icon: <BsTools size={40} /> },
    { icon: <TbAdjustmentsCode size={40} /> },
    { icon: <FaAward size={40} /> },
    { icon: <GoRocket size={40} /> },
  ];

  return (
    <div className="relative w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] mx-auto flex items-center justify-center">
      <div className="absolute w-full h-full rounded-full border-dashed border-2 border-secondary animate-spin" style={{ animationDuration: '20s' }}>
        {icons.map(({ icon }, index) => (
          <div
            key={index}
            className={`absolute flex items-center justify-center rounded-full border-2 border-secondary p-3 sm:p-5 text-primary transition-all duration-300`}
            style={positions[index] || { visibility: "hidden" }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevopsSolutionCycle;
