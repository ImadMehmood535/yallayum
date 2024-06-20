"use client";
import React, { useState } from "react";
import VariationsWeightArea from "./VariationsWeightArea";
import ProgressBarArea from "./ProgressBarArea";
import FlavourWrapper from "./FlavourWrapper";
import FooterArea from "./FooterArea";

const CreateProduct = ({ variations }) => {
  const [currentIndex, setCurrentIndex] = useState(50);
  const [quantities, setQuantities] = useState(
    variations.items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const calculateTotalAmount = () => {
    return variations.items.reduce((total, item) => {
      return total + item.PricePerGram * (quantities[item.id] || 0);
    }, 0);
  };

  const totalWeight = Object.values(quantities).reduce(
    (acc, qty) => acc + qty,
    0
  );
  const filledPercentage = (totalWeight / currentIndex) * 100;

  return (
    <div className="CreateProduct pageLayout px-0 mx-auto">
      <div className="container">
        <div className="w-full md:max-w-[760px] mx-auto">
          <VariationsWeightArea
            setQuantities={setQuantities}
            setCurrentIndex={setCurrentIndex}
            variations={variations}
            currentIndex={currentIndex}
          />
          <ProgressBarArea filledPercentage={filledPercentage} />
          <FlavourWrapper
            variations={variations}
            currentIndex={currentIndex}
            totalWeight={totalWeight}
            quantities={quantities}
            setQuantities={setQuantities}
          />
          <FooterArea calculateTotalAmount={calculateTotalAmount} />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
