import { Slide1SVG, Slide2SVG } from "@/data/allSvgs";
import React, { useState } from "react";

const FilterMode = ({
  changeVariantImages,
  data,
  setSelectedImage,
  setVariation,
}) => {
  const [choice, setChoice] = useState(0);

  const handleChange = (newChoice) => {
    setChoice(newChoice);
    changeVariantImages([...data?.productVariation[newChoice]?.gallery]);
    setSelectedImage(data?.productVariation[newChoice]?.imageUrl);
    setVariation(data?.productVariation[newChoice]);
  };

  return (
    <div className="w-fit rounded-full flex justify-center items-center gap-4 px-2 py-1 bg-themeGray-0 border-[2.5px] border-[#E4E7ED]">
      <div
        onClick={() => handleChange(0)}
        className={`transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center ${
          choice === 0 ? "bg-black" : "bg-transparent"
        }`}
      >
        <Slide1SVG color={choice === 0 ? "#ffff" : "#cccccc"} />
      </div>
      <div
        onClick={() => handleChange(1)}
        className={`transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center ${
          choice === 1 ? "bg-black" : "bg-transparent"
        }`}
      >
        <Slide2SVG color={choice === 1 ? "#ffff" : "#cccccc"} />
      </div>
    </div>
  );
};

export default FilterMode;
