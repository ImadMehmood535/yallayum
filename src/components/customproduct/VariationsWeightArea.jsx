import { BlackpackIcon, WhitepackIcon } from "@/data/allSvgs";
import React from "react";

const VariationsWeightArea = ({variations, setCurrentIndex, setQuantities, currentIndex}) => {
  return (
    <div className="VariationsWeightArea">
      <div className="variations-weight-area">
        <h2 className="text-5xl GeneralSans font-medium mb-10 text-center">
          Select Can Size
        </h2>
        <div className="product-tabs justify-center gap-6 flex flex-col sm:flex-row">
          {variations.variationsizes.map((item, key) => (
            <div
              onClick={() => {
                setCurrentIndex(item);
                setQuantities(
                  variations.items.reduce((acc, item) => {
                    acc[item.id] = 0;
                    return acc;
                  }, {})
                );
              }}
              key={key}
              className={`tab py-10 px-4 flex justify-center items-center flex-col border-2 border-black rounded-xl min-w-[180px] max-h-[200px] cursor-pointer hover:bg-[#FC4242] hover:border-[#FC4242] hover:text-white  ${
                currentIndex === item ? "active" : "nonactive"
              }`}
            >
              {currentIndex === item ? <WhitepackIcon /> : <BlackpackIcon />}
              <h4 className="mt-4 text-center">{item} Gram</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariationsWeightArea;
