import { StarIcon } from "@/data/allSvgs";
import React from "react";

const CustomSliderReview = ({ stars, reviews }) => {
  return (
    <div className="w-full flex justify-start items-center gap-4">
      <div className="flex ">
        {Array.from({ length: stars }).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
      <p>
        ({reviews} Reviews)
      </p>
    </div>
  );
};

export default CustomSliderReview;
