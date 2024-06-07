import React from "react";

const ImpactItem = ({ position, image, subheading, title, text }) => {
  return (
    <div className="ImpactItem item-wrapper">
      <div
        className={`item flex flex-row ${
          position ? `flex-row` : `flex-row-reverse`
        } items-center bg-themePrimary-0 hover:bg-themeHover-0 group items-stretch`}
      >
        <div className="relative w-full h-[400px] sm:h-auto  md:w-1/2 overflow-hidden">
          <div
            className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform ease-in-out transform group-hover:scale-110`}
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 min-h-[300px] lg:min-h-[450px] justify-center text-center">
          <div className="px-4 py-6">
            <h4 className="sub-heading GeneralSans text-[#3C3C3B] text-lg font-medium mb-2 transition-all duration-500 lg:translate-y-4 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              No. {subheading}
            </h4>
            <h2 className="heading GeneralSans font-bold text-2xl text-[#403D3D] mb-2 transition-all duration-500 delay-100">
              {title}
            </h2>
            <p className="text-[#3C3C3B] GeneralSans text-base transition-all duration-500 delay-200 lg:translate-y-6 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactItem;
