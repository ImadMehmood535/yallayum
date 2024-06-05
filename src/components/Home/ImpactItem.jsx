import Image from "next/image";
import React from "react";

const ImpactItem = ({ position, image, subheading, title, text }) => {
  return (
    <div className="ImpactItem item-wrapper">
      <div
        className={`item flex flex-row ${
          position ? `flex-row` : `flex-row-reverse`
        } items-center bg-themePrimary-0 hover:bg-[#F9F4ED] group`}
      >
        <div className={`img-wrapper w-full md:w-1/2 overflow-hidden`}>
          <Image
            src={image}
            alt={image}
            width={1000}
            height={1000}
            quality={100}
            className="transition-transform ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-6 text-center">
          <h4
            className="sub-heading text-[#3C3C3B] text-lg font-medium mb-2 transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {subheading}
          </h4>
          <h2
            className="heading font-bold text-2xl  text-[#403D3D] mb-2 transition-all duration-500 delay-100   "
          >
            {title}
          </h2>
          <p
            className="text-[#3C3C3B] text-base transition-all duration-500 delay-200 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactItem;