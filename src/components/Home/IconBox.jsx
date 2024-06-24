import Image from "next/image";
import React from "react";

const IconBox = ({ position, textposition, icon, title, content }) => {
  return (
    <div className="IconBox">
      <div className={`icon-area mb-6 justify-center flex ${position === "end" ? "md:justify-end" : position === "start" ? "md:justify-start" : "justify-center"}`}>
        <Image height={90} width={90} src={icon.src} alt={title} className="w-[90px] h-[90px]" />
      </div>
      <div className={`content-area text-center ${textposition === "right" ? "md:text-right" : textposition === "left" ? "md:text-left" : "text-center"}`}>
        <h4 className="GeneralSans mb-4 text-2xl font-medium">{title}</h4>
        <p className="GeneralSans text-base leading-5">{content}</p>
      </div>
    </div>
  );
};

export default IconBox;
