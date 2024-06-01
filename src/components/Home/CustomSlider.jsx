"use client";
import { pic1, pic2, pic3 } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const CustomSlider = () => {
  const data = [
    {
      index: 1,
      name: "Crunchy Strawberry",
      imageUrl: pic1,
    },
    {
      index: 2,
      name: "Crunchy Strawberry2",
      imageUrl: pic2,
    },
    {
      index: 3,
      name: "Crunchy Strawberry3",
      imageUrl: pic3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSwapped, setImageSwapped] = useState(false);
  const imageContainerRef = useRef(null);

  const handleIndex = (index) => {
    setImageSwapped(true);
    setCurrentIndex((index + data.length) % data.length);
    setImageSwapped(false);
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      const container = imageContainerRef.current;
      container.addEventListener("animationend", () => {
        setImageSwapped(false);
      });
    }
  }, []);

  return (
    <div className="h-screen w-full max-w-[90%] flex ml-auto justify-end items-center">
      <div className="flex flex-col gap-10 max-w-[30%] w-full">
        <div>
          <h1 className="text-3xl font-bold">{data[currentIndex]?.name}</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div
            onClick={() => handleIndex(currentIndex - 1)}
            className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center cursor-pointer"
          >
            left
          </div>
          <div
            onClick={() => handleIndex(currentIndex + 1)}
            className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center cursor-pointer"
          >
            right
          </div>
        </div>
      </div>
      <div
        ref={imageContainerRef}
        className="flex w-full justify-center items-center"
      >
        {Array.from({ length: 3 }).map((_, idx) => {
          const dataIndex = (currentIndex + idx) % data.length;
          const size = 500 - idx * 150; // Sizes: 500px, 350px, 200px
          const isSwappingImage = idx === 0 || idx === 1;
          return (
            <div key={dataIndex} className="flex flex-col">
              <Image
                src={data[dataIndex]?.imageUrl}
                alt={data[dataIndex]?.name}
                width={size}
                height={size}
                className={`w-[${size}px] transition-transform ${
                  isSwappingImage && imageSwapped ? "swap-animation" : ""
                }`}
              />

              <p>{data[dataIndex]?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSlider;
