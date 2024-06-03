"use client";
import { ShoppingBag } from "@/data/allSvgs";
import React, { useState } from "react";

const AnimatedButton = ({ text, shop }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`group max-w-[160px] ${
        shop ? "hover:max-w-[200px] " : "max-w-[130px]  "
      }    transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2 w-full bg-black h-12 px-4   text-gray-100 hover:text-white cursor-pointer whitespace-nowrap ${
        active ? "buttonShadow" : ""
      }   `}
    >
      <div className="group-hover:h-[24px]  h-0 transition-all">
        <ShoppingBag width={20} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AnimatedButton;
