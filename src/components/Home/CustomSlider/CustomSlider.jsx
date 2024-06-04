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
    <div className="h-full w-full max-w-[95%] flex flex-wrap md:flex-nowrap ml-auto  justify-start md:justify-end items-center ">
      <div className="md:max-w-[30%] w-full">
        <Details
          setSlidesData={setSlidesData}
          setActiveSlides={setActiveSlides}
          activeSlides={activeSlides}
          slidesData={slidesData}
          handleIndex={handleIndex}
          currentIndex={currentIndex}
        />
      </div>

      <div className="  flex w-full justify-center items-center">
        {Array.from({ length: 3 }).map((_, idx) => {
          const dataIndex = (currentIndex + idx) % slidesData?.length;
          const size = 600 - idx * 150;
          return (
            <div key={dataIndex} className="flex flex-col select-none ">
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
  );
};

export default CustomSlider;
