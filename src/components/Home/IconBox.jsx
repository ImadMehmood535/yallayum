import Image from "next/image";
import React from "react";

const IconBox = ({ position, textposition, icon, title, content }) => {
  return (
    <div className="IconBox">
      <div className={`icon-area mb-6 flex justify-center md:justify-${position}`}>
      <Image height={500} width={500}src={icon.src} alt={title} className="w-[90px] h-[90px]" />
      </div>
      <div className={`content-area text-center  md:text-${textposition}`}>
        <h4 className="GeneralSans mb-4 text-2xl font-medium">{title}</h4>
        <p className="GeneralSans text-base leading-5">{content}</p>
      </div>
    </div>
  );
};

export default IconBox;
