import AnimatedButton from "@/components/general/AnimatedButton";
import { ArrowLeft, ArrowRight } from "@/data/allSvgs";
import React from "react";
import CustomSliderReview from "./CustomSliderReview";
import CustomSliderMode from "./CustomSliderMode";
import Link from "next/link";

const Details = ({
  setSlidesData,
  setActiveSlides,
  activeSlides,
  slidesData,
  currentIndex,
  handleNextIndex,
  setCurrentIndex,
  handlePrevIndex,
  slide1,
  slide2,
  arabic,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <CustomSliderMode
        slide1={slide1}
        slide2={slide2}
        setSlidesData={setSlidesData}
        setActiveSlides={setActiveSlides}
        activeSlides={activeSlides}
        setCurrentIndex={setCurrentIndex}
      />
      <div>
        <h1
          className={`text-3xl md:text-4xl ${
            arabic ? "ArbiFont" : "GeneralSans"
          } font-semibold ${arabic ? "text-right" : ""} `}
        >
          {slidesData[currentIndex]?.name}
        </h1>
      </div>

      <div>
        <p
          className={`${
            arabic ? "text-right ArbiFont" : "GeneralSans"
          }  text-[16px]  font-medium`}
        >
          {slidesData[currentIndex]?.details}
        </p>
      </div>
      <Link
        href={"/shop"}
        className={`w-full ${arabic ? "flex justify-end " : ""} `}
      >
        <AnimatedButton text={arabic ? " اشتري الآن " : " BUY NOW"} />
      </Link>
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
