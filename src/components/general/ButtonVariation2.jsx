import { ShoppingBag } from "@/data/allSvgs";
import Link from "next/link";
import React from "react";

const ButtonVariation2 = () => {
  return (
    <div className="ButtonVariation2">
      <Link href="/" className={`group`}>
        <div
          className={` w-full group-hover:w-[280px] mx-auto Fedra-400 transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2  bg-black py-3 px-4 text-gray-100 hover:text-white cursor-pointer whitespace-nowrap   `}
        >
          <div className="group-hover:h-[24px]  h-0 transition-all">
            <ShoppingBag width={20} />
          </div>
          <p>Add To Cart</p>
        </div>
      </Link>
    </div>
  );
};

export default ButtonVariation2;
