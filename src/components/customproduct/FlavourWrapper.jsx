"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const FlavourWrapper = ({
  variations,
  currentIndex,
  totalWeight,
  quantities,
  setQuantities,
  setPayload,
  calculateTotalAmount,
}) => {
  const handleRangeChange = (id, value) => {
    const parsedValue = parseInt(value);
    const newQuantities = { ...quantities, [id]: parsedValue };
    const totalWeight = Object.values(newQuantities).reduce(
      (acc, qty) => acc + qty,
      0
    );

    if (totalWeight <= currentIndex) {
      setQuantities(newQuantities);
    } else {
      const allowedValue = currentIndex - (totalWeight - parsedValue);
      setQuantities({ ...quantities, [id]: Math.max(0, allowedValue) });
    }
  };

  useEffect(() => {
    const arr = variations?.items
      ?.filter(variation => quantities[variation?.id] > 0)
      ?.map(variation => ({
        flavorItemId: variation?.id,
        grams: quantities[variation?.id],
        name: variation?.name,
        imageUrl: variation?.imageUrl,
        price : variation?.price
      }));
    
    setPayload({
      totalPrice: calculateTotalAmount(),
      customOrderItems: arr,
    });
  }, [quantities, variations?.items, setPayload]);
  

  return (
    <div className="FlavourWrapper">
      <div className="flavour-wrapper GeneralSans ">
        {variations.items.map((variation) => {
          return (
            <div
              key={variation.id}
              className="flex flex-col sm:flex-row gap-3 border border-black rounded-xl mb-4 p-6"
            >
              <div className="flavour-image-area w-full sm:w-1/6 flex justify-center">
                <div className="border border-black p-4 rounded-lg">
                  <Image
                    src={variation?.imageUrl}
                    width={100}
                    height={100}
                    alt={variation?.name}
                    className="h-20 w-auto object-cover"
                  />
                </div>
              </div>
              <div className="flavour-content-area flex flex-col justify-between w-full sm:w-5/6">
                <div className="header-area w-full flex flex-row items-center gap-4  justify-between  mb-4 sm:mb-0">
                  <h2 className="font-semibold">{variation?.name}</h2>
                  <h6 className="table py-2 px-6 text-base capitalize bg-black text-white rounded-lg">
                    {quantities[variation?.id]} grams
                  </h6>
                </div>
                <div className="range-selector mb-4">
                  <div className="mx-auto">
                    <input
                      id="range"
                      type="range"
                      className="block w-full rounded-full progress transition-all duration-150"
                      min="0"
                      step="10"
                      max={currentIndex}
                      value={quantities[variation?.id]}
                      onChange={(e) =>
                        handleRangeChange(variation.id, e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlavourWrapper;
