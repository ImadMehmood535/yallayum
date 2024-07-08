import React from "react";
import { FaStar } from "react-icons/fa6";

const RatingNoOfReview = ({ avgrating, totalReview }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar key={i} color={i <= avgrating ? "#FC4242" : "#e4e5e9"} />
    );
  }

  return (
    <div className="RatingNoOfReview">
      <div className="flex flex-row gap-4 items-center">
        <div className="star-area flex flex-row items-center gap-2 text-[#FC4242] text-lg">
          {stars}
        </div>
        <div className="rate-count">
          <p className="GeneralSans text-base">({totalReview || 0} Reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default RatingNoOfReview;
