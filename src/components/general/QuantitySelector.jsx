"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="QuantitySelector">
      <div className="w-fit rounded-full flex justify-center items-center gap-4 px-2 py-1 bg-themeGray-0 border-[2.5px] border-[#E4E7ED]">
        <button
          type="button"
          className={`transition-all cursor-pointer w-[40px] h-[55px] rounded-full flex justify-center items-center  `}
          onClick={decrementQuantity}
        >
          <FaMinus className="group-hover/button:fill-white group-hover/button:text-white" />
        </button>
        <input
          className="w-10 py-2 text-center bg-transparent border-0"
          type="text"
          value={quantity}
          readOnly
        />
        <button
          type="button"
          className={`transition-all cursor-pointer w-[40px] h-[55px] rounded-full flex justify-center items-center  `}
          onClick={incrementQuantity}
        >
          <FaPlus className="group-hover/button:fill-white group-hover/button:text-white" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
