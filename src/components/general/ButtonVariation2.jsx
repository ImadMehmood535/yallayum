import { ShoppingBag } from "@/data/allSvgs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ButtonVariation2 = ({ filledPercentage, payload }) => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleCheckout = () => {
    if (filledPercentage != 100) {
      setError("Please fill your CAN in order to checkout");
    } else {
      const payloadString = encodeURIComponent(JSON.stringify(payload));
      router.push(`/checkout?type=custom&payload=${payloadString}`);
    }
  };
  return (
    <div
      className="ButtonVariation2 flex flex-col gap-4 w-full"
      onClick={handleCheckout}
    >
      {error && filledPercentage != 100 && (
        <p className="text-red-700">{error}</p>
      )}

      <div
        href={`/checkout?type=custom`}
        className={` w-full group-hover:w-[280px] mx-auto Fedra-400 transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2  bg-black py-3 px-4 text-gray-100 hover:text-white cursor-pointer whitespace-nowrap   `}
      >
        <div className="group-hover:h-[24px]  h-0 transition-all">
          <ShoppingBag width={20} />
        </div>
        <p className="capitalize font-semibold">proceed to checkout</p>
      </div>
    </div>
  );
};

export default ButtonVariation2;
