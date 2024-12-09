"use client";
import { API } from "@/api";
import { ShoppingBag } from "@/data/allSvgs";
import { errorToast, successToast } from "@/hooks/useToast";
import React, { useState } from "react";

const AddCartBtn = ({ productVariationId, quantity }) => {
  const [loading, setLaoding] = useState(false);
  const handleAddToCart = async () => {
    setLaoding(true);
    try {
      const response = await API.addToCart({
        productVariationId: productVariationId,
        quantity: quantity,
      });

      successToast(response?.data?.message);
      setLaoding(false);
    } catch (error) {
      console.log(error);
      setLaoding(false);

      errorToast(error, "Can not add to cart");
    }
  };
  return (
    <div
      onClick={handleAddToCart}
      className={`group w-full Fedra-400 transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2  bg-black py-3 px-4 text-gray-100 hover:text-white cursor-pointer whitespace-nowrap   `}
    >
      <div className="group-hover:h-[24px]  h-0 transition-all">
        <ShoppingBag width={20} />
      </div>
      <p>{loading ? "adding..." : "Add to cart"}</p>
    </div>
  );
};

export default AddCartBtn;
