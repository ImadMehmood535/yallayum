import React from "react";
import { FaStar } from "react-icons/fa6";

const TakeRating = ({ setRating, rating }) => {
  const handleRating = (rate) => {
    setRating(rate);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        color={i <= rating ? "#FC4242" : "#e4e5e9"}
        onClick={() => handleRating(i)}
        style={{ cursor: "pointer" }}
      />
    );
  }

  return (
    <div className="RatingNoOfReview">
      <div className="flex flex-row gap-4 items-center">
        <div className="star-area flex flex-row items-center gap-2 text-[#FC4242] text-lg">
          {stars}
        </div>
      </div>
    </div>
  );
};

export default TakeRating;
