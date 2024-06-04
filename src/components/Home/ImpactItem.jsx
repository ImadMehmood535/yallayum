import Image from "next/image";
import React from "react";

const ImpactItem = ({ position, image, subheading, title, text }) => {
  console.log(image.src, "image");
  return (
    <div className="ImpactItem item-wrapper">
      <div
        className={`item flex flex-row ${
          position ? `flex-row` : ` flex-row-reverse`
        }
            items-center bg-[#FFF5F5]`}
      >
        <div className={`img-wrapper w-full md:w-1/2  `}>
          <Image
            src={image}
            alt={image}
            width={1000}
            height={1000}
            quality={100}
            // objectFit="contain"
            // layout="responsive"
          />
        </div>
        <div className="content-wrapper w-full md:w-1/2 p-6 text-center ">
          <h4 className="sub-heading text-[#3C3C3B] text-lg font-medium">
            {subheading}
          </h4>
          <h2 className="heading font-bold text-2xl text-[#403D3D]">{title}</h2>
          <p className="text-[#3C3C3B] text-base">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactItem;
