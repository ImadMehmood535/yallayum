import { ShoppingBag } from "@/data/allSvgs";
import React from "react";

const AnimatedButton = ({ text, shop }) => {
  return (
    <div
      className={`group max-w-[160px] Fedra-400 ${
        shop ? "hover:max-w-[200px]" : "max-w-[130px]"
      } transition-all text-[12px] hover:text-[13px] font-semibold rounded-full flex justify-center items-center gap-0 hover:gap-2 w-full bg-black h-12 px-4 text-gray-100 hover:text-white cursor-pointer whitespace-nowrap group-hover:buttonShadow`}
    >
      <div className="group-hover:h-[24px] h-0 transition-all">
        <ShoppingBag width={20} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default AnimatedButton;
