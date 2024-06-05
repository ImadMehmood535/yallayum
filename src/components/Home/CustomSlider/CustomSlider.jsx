"use client";
import Image from "next/image";
import React, { useState } from "react";
import { slide1 } from "@/data/slides";
import Details from "./Details";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesData, setSlidesData] = useState(slide1);

  const handleIndex = () => {
    setCurrentIndex((currentIndex + 1) % slidesData.length);
  };

  const handlePrevIndex = () => {
    setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
  };

  const getClassName = (index) => {
    if (index === currentIndex) {
      return "active z-0 -translate-x-[240%] scale-150";
    }
    if (index === (currentIndex + 1) % slidesData.length) {
      return "next  next z-10 -translate-x-[100%] scale-100";
    }
    if (index === (currentIndex - 1 + slidesData.length) % slidesData.length) {
      return "preview-next next z-10  translate-x-[40%] scale-75";
    }
    return "";
  };

  return (
    <div className="CustomSlider  pageLayout   px-0 mx-auto">
      <div className="slider-wrapper flex justify-between items-center pl-[3%]">
        <div className="w-full md:max-w-[30%]">
          <Details
            setSlidesData={setSlidesData}
            slidesData={slidesData}
            handleIndex={handleIndex}
            currentIndex={currentIndex}
          />
        </div>

        <div className="ze-image-area flex w-full justify-end items-center relative">
          {slidesData.map((slide, index) => (
            <div key={index} className={`item absolute right-0 ${getClassName(index)}`}>
              <Image
                src={slide?.imageUrl}
                alt={slide?.name}
                width={300}
                height={300}
                className={`w-[300px] select-none`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
