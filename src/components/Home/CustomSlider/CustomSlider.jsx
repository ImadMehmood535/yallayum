"use client";
import Image from "next/image";
import React, { useState } from "react";
import Details from "./Details";

const CustomSlider = ({ slide1, slide2 , arabic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesData, setSlidesData] = useState(slide1);
  const [activeSlides, setActiveSlides] = useState(1);

  const handleNextIndex = () => {
    setCurrentIndex((currentIndex + 1) % slidesData.length);
  };

  const handlePrevIndex = () => {
    setCurrentIndex((currentIndex - 1 + slidesData.length) % slidesData.length);
  };

  const getClassName = (index) => {
    const length = slidesData.length;
    if (length === 3) {
      if (index === currentIndex) {
        return "active z-30 sm:z-0 -translate-x-[120%] sm:-translate-x-[120%] md:-translate-x-[120%] lg:-translate-x-[130%] xl:-translate-x-[220%] 2xl:-translate-x-[260%] scale-100 lg:scale-150 hover:-translate-y-[10%]";
      }
      if (index === (currentIndex + 1) % slidesData.length) {
        return "next z-20 sm:z-10 -translate-x-[30%] sm:-translate-x-[35%] lg:-translate-x-[30%] xl:-translate-x-[90%] 2xl:-translate-x-[100%] scale-75 lg:scale-100";
      }
      if (
        index ===
        (currentIndex - 1 + slidesData.length) % slidesData.length
      ) {
        return "preview-next z-10 translate-x-[40%] scale-50 lg:scale-75";
      }
      return "";
    } else if (length >= 3) {
      // New logic for 5 items
      if (index === currentIndex) {
        return "active z-30 sm:z-0 -translate-x-[120%] sm:-translate-x-[120%] md:-translate-x-[120%] lg:-translate-x-[130%] xl:-translate-x-[220%] 2xl:-translate-x-[260%] scale-100 lg:scale-150 hover:-translate-y-[10%]";
      }
      if (index === (currentIndex + 1) % length) {
        return "next z-20 sm:z-10 -translate-x-[30%] sm:-translate-x-[35%] lg:-translate-x-[30%] xl:-translate-x-[90%] 2xl:-translate-x-[100%] scale-75 lg:scale-100";
      }
      if (index === (currentIndex + 2) % length) {
        return "next-next z-10 translate-x-[40%] scale-50 lg:scale-75";
      }
      if (index === (currentIndex - 1 + length) % length) {
        return "prev  z-10 translate-x-[160%] scale-50 lg:scale-75";
      }
      if (index === (currentIndex - 2 + length) % length) {
        return "prev-prev  z-10 translate-x-[100%] scale-50 lg:scale-75";
      }
      return "hidden";
    }
  };

  const getBackgroundClass = (index) => {
    return `bg-image bg-item-${index}`;
  };

  return (
    <div className="CustomSlider pageLayout  px-0 mx-auto overflow-x-hidden">
      <div className="container !px-0">
        <div className="slider-wrapper flex flex-col lg:flex-row justify-between items-center pl-[3%] pr-[3%] lg:pr-0">
          <div className="w-full lg:max-w-[30%]">
            <Details
            arabic={arabic}
              slide1={slide1}
              slide2={slide2}
              setSlidesData={setSlidesData}
              setActiveSlides={setActiveSlides}
              activeSlides={activeSlides}
              slidesData={slidesData}
              currentIndex={currentIndex}
              handleNextIndex={handleNextIndex}
              handlePrevIndex={handlePrevIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>

          <div
            className={`ze-image-area flex w-full justify-end items-center relative min-h-[500px] ${getBackgroundClass(
              currentIndex
            )}`}
          >
            {slidesData?.map((slide, index) => (
              <div
                key={index}
                className={`item absolute right-0 ${getClassName(index)}`}
              >
                <Image
                  src={slide?.imageUrl}
                  alt={slide?.name}
                  width={300}
                  height={300}
                  className="w-[300px] select-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
