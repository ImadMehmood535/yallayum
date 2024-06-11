import React from "react";

const FeatureIconBox = ({ position, textposition, icon, title, content }) => {
  return (
    <div className="IconBox">
      <div className={`icon-area  mb-6 flex justify-center md:justify-${position} `}>
        <img src={icon.src} alt={title} className="w-[120px] h-[120px] bg-white rounded-full p-6" />
      </div>
      <div className={`content-area text-center md:text-${textposition}`}>
        <h4 className="GeneralSans mb-4 md:mb-6 text-2xl font-medium">{title}</h4>
        <p className="GeneralSans text-lg md:text-2xl text-black">{content}</p>
      </div>
    </div>
  );
};

export default FeatureIconBox;
