import AnimatedButton from "@/components/general/AnimatedButton";
import { ArrowLeft, ArrowRight } from "@/data/allSvgs";
import React from "react";
import CustomSliderReview from "./CustomSliderReview";
import CustomSliderMode from "./CustomSliderMode";

const Details = ({
  setSlidesData,
  setActiveSlides,
  activeSlides,
  slidesData,
  currentIndex,
  handleNextIndex,
  handlePrevIndex,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <CustomSliderMode
        setSlidesData={setSlidesData}
        setActiveSlides={setActiveSlides}
        activeSlides={activeSlides}
      />
      <div>
        <h1 className="text-4xl md:text-6xl GeneralSans font-semibold">{slidesData[currentIndex]?.name}</h1>
      </div>
      <div>
        <CustomSliderReview
          stars={slidesData[currentIndex]?.stars}
          reviews={slidesData[currentIndex]?.reviews}
        />
      </div>
      <div>
        <p className="text-[16px] GeneralSans font-medium">{slidesData[currentIndex]?.details}</p>
      </div>
      <AnimatedButton text={"BUY NOW"} />
      <div className="flex justify-start px-3 items-center gap-4">
        <div
          onClick={handlePrevIndex}
          className="w-12 select-none hover:scale-125 transition-all h-12 rounded-full bg-themeGray-0 flex justify-center items-center cursor-pointer"
        >
          <ArrowLeft />
        </div>
        <div
          onClick={handleNextIndex}
          className="w-12 h-12 select-none hover:scale-125 transition-all rounded-full bg-themeGray-0 flex justify-center items-center cursor-pointer"
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Details;
