import { ShoppingBag } from "@/data/allSvgs";
import React from "react";

const AddCartBtn = () => {
  return (
    <div
      className={`group w-full Fedra-400     transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2  bg-black py-3 px-4 text-gray-100 hover:text-white cursor-pointer whitespace-nowrap   `}
    >
      <div className="group-hover:h-[24px]  h-0 transition-all">
        <ShoppingBag width={20} />
      </div>
      <p>Add To Cart</p>
    </div>
  );
};

export default AddCartBtn;
