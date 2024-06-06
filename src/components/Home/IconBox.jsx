import React from "react";

const IconBox = ({ position, icon, title, content }) => {
  return (
    <div className="IconBox">
      <div
        className={`icon-area mb-6 flex ${
          position
            ? `justify-center lg:justify-start `
            : `justify-center lg:justify-end`
        }`}
      >
        <img src={icon.src} alt={title} className="w-[90px] h-[90px]" />
      </div>
      <div
        className={`content-area ${
          position ? `text-center lg:text-left` : `text-center lg:text-right`
        }`}
      >
        <h4 className="GeneralSans mb-4 text-2xl font-medium">{title}</h4>
        <p className="GeneralSans text-base leading-5">{content}</p>
      </div>
    </div>
  );
};

export default IconBox;
