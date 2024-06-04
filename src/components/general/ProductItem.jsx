import Image from "next/image";
import React from "react";

const ProductItem = ({ data, slider }) => {
  return (
    <div className={`ProductItem group  cursor-pointer transition-all duration-200  relative  p-4  `}>
      <div className="item-wrapper  ">
        <Image
          src={data?.image}
          alt={data?.image}
          width={280}
          height={280}
          quality={100}
          // objectFit="contain"
          // layout="responsive"
          className={`${slider ? "h-auto" : "  !max-w-auto !xl:max-h-[300px]"}`}
        />
        <h4 className="text-[#3C3C3B] font-normal text-lg text-center whitespace-nowrap">
          {data?.title}
        </h4>
      </div>
    </div>
  );
};

export default ProductItem;
