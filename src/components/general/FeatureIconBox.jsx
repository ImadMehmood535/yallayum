import Image from "next/image";
import React from "react";

const FeatureIconBox = ({
  position,
  textposition,
  icon,
  title,
  content,
  bold,
}) => {
  return (
    <div className="IconBox">
      <div
        className={`icon-area  mb-6 flex justify-center md:justify-${position} `}
      >
        <Image
          height={500}
          width={500}
          src={icon}
          alt={title}
          loading="eager"
          className="w-[120px] h-[120px] bg-white rounded-full p-6"
        />
      </div>
      <div className={`content-area text-center md:text-${textposition}`}>
        <h4
          className={` mb-4 md:mb-6 text-2xl   ${
            bold ? "font-bold ArbiFont" : "font-medium GeneralSans"
          }`}
        >
          {title}
        </h4>
        <p className={` ${bold ? "ArbiFont" : "GeneralSans md:text-2xl"}   text-lg  text-black`}>{content}</p>
      </div>
    </div>
  );
};

export default FeatureIconBox;
