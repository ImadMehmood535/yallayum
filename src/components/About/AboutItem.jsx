import Image from "next/image";
import React from "react";

const AboutItem = ({ data, isEven }) => {
  return (
    <div className={`AboutItem ${isEven ? "mb-16" : "mb-0"}`}>
      <div
        className={`flex flex-col ${
          isEven ? " md:flex-row" : "md:flex-row-reverse"
        } justify-center items-center  `}
      >
        <div className="image-area w-full md:w-1/2">
          <Image
            src={data?.image}
            alt={data?.title}
            width={630}
            height={540}
            quality={100}
            className="w-full object-contain h-auto"
          />
        </div>
        <div
          className={`content-area w-full md:w-1/2 ${
            isEven ? `pt-10 md:pl-12` : `pt-10 md:pr-12`
          } `}
        >
          <h2 className="mb-3">{data.title}</h2>
          <h4 className="GeneralSans text-[#FC4242] text-2xl mb-4 font-medium">
            {data.subtitle}
          </h4>
          <p className="">
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
