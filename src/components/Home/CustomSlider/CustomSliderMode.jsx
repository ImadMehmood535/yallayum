import { Slide1SVG, Slide2SVG } from "@/data/allSvgs";
import { slide1, slide2 } from "@/data/slides";
import React from "react";

const CustomSliderMode = ({ setSlidesData, setActiveSlides, activeSlides }) => {
  return (
    <div className="w-fit  rounded-full flex justify-center items-center gap-4 px-2 py-1 bg-themeGray-0 border-[2.5px] border-[#E4E7ED]">
      <div
        onClick={() => {
          setSlidesData(slide1);
          setActiveSlides(1);
        }}
        className={` transition-all cursor-pointer  w-[55px] h-[55px] rounded-full ${
          activeSlides === 1 ? "bg-black" : "bg-transparent"
        } flex justify-center items-center`}
      >
        <Slide1SVG color={activeSlides === 1 ? "white" : "#CCCCCC"} />
      </div>
      <div
        onClick={() => {
          setSlidesData(slide2);
          setActiveSlides(2);
        }}
        className={` transition-all  cursor-pointer  w-[55px] h-[55px] rounded-full ${
          activeSlides === 2 ? "bg-black" : "bg-transparent"
        } flex justify-center items-center`}
      >
        <Slide2SVG color={activeSlides === 2 ? "white" : "#CCCCCC"} />
      </div>
    </div>
  );
};

export default CustomSliderMode;
