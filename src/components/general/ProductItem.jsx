import Image from "next/image";
import React from "react";

const ProductItem = ({ data, slider }) => {
  return (
    <div className={`ProductItem   group flex flex-col justify-center cursor-pointer transition-all duration-200  relative  p-4  `}>
      <div className="item-wrapper max-w-[200px] mx-auto  ">
        <Image
          src={data?.image}
          alt={data?.image}
          width={350}
          height={350}
          quality={100}
          // objectFit="contain"
          // layout="responsive"
          className={`${slider ? "h-auto md:h-[230px] 2xl:h-auto " : "  "}`}
        />
        <h4 className="text-[#3C3C3B] GeneralSans font-normal text-lg text-center whitespace-nowrap">
          {data?.title}
        </h4>
      </div>
    </div>
  );
};

export default ProductItem;
