"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantitySelector = ({ setQuantity, quantity }) => {
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="QuantitySelector GeneralSans">
      <div className="w-fit rounded-full flex justify-center items-center gap-2 px-2 py-1 bg-themeGray-0 border-[2.5px] border-[#E4E7ED]">
        <button
          type="button"
          className={`group transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center hover:bg-[#cccccc]  `}
          onClick={decrementQuantity}
        >
          <FaMinus className="text-[#FC4242] group-hover:text-white" />
        </button>
        <input
          className="w-10 py-2 text-center bg-transparent border-0 GeneralSans font-semibold"
          type="text"
          value={quantity}
          readOnly
        />
        <button
          type="button"
          className={`group transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center hover:bg-[#cccccc]  `}
          onClick={incrementQuantity}
        >
          <FaPlus className="text-[#FC4242] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
