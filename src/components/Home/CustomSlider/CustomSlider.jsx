"use client";
import Image from "next/image";
import React, { useState } from "react";
import { slide1 } from "@/data/slides";
import Details from "./Details";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesData, setSlidesData] = useState(slide1);
  const [activeSlides, setActiveSlides] = useState(1);

  const handleIndex = (index) => {
    setCurrentIndex((index + slidesData?.length) % slidesData?.length);
  };

  return (
    <div className="CustomSlider  ">
      <div className="slider-wrapper flex justify-between items-end pl-[3%]">
        <div className="w-full md:max-w-[30%]">
          <Details
            setSlidesData={setSlidesData}
            setActiveSlides={setActiveSlides}
            activeSlides={activeSlides}
            slidesData={slidesData}
            handleIndex={handleIndex}
            currentIndex={currentIndex}
          />
        </div>

        <div className="ze-image-area flex w-full justify-end items-end relative">
          {Array.from({ length: 3 }).map((_, idx) => {
            const dataIndex = (currentIndex + idx) % slidesData?.length;
            const size = 600 - idx * 150;
            return (
              <div key={dataIndex} className="item flex flex-col select-none absolute">
                <Image
                  src={slidesData[dataIndex]?.imageUrl}
                  alt={slidesData[dataIndex]?.name}
                  width={size}
                  height={size}
                  className={`w-[${size}px] select-none `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
