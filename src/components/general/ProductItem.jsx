import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import Popup from "./Popup";
import { ShoppingBag } from "@/data/allSvgs";

const ProductItem = ({
  data,
  variation,
  selectedVariationType,
  option,
  btnAllow,
}) => {
  const selectedVariation =
    variation ||
    data?.variation.find(
      (variation) => variation.variationType === selectedVariationType
    );

  const variationImage = selectedVariation?.variationImage.src;
  const variationPrice = selectedVariation?.variationPrice;

  const [isOpen, setIsOpen] = useState(false);
  const modalDisplay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`ProductItem group flex flex-col justify-center cursor-pointer transition-all duration-200 relative p-6`}
    >
      <div
        className={`item-wrapper ${
          option == 1
            ? `w-full flex flex-col md:flex-row items-center`
            : `max-w-[200px] flip-container`
        } mx-auto`}
      >
        <div className={`flip-contain ${option == 1 ? `w-[20%]` : `w-full`}`}>
          <Link
            href={`/shop/${data?.slug}?variation=${selectedVariation?.variationType}&id=${data.id}`}
          >
            <Image
              src={variationImage}
              alt={data?.title}
              width={350}
              height={350}
              quality={100}
              className="h-auto  md:h-[230px] 2xl:h-auto"
            />
          </Link>
        </div>
        <div
          className={`content-area flex flex-col items-center gap-2 ${
            option == 1
              ? `text-center md:text-left w-[75%]`
              : `text-center w-full`
          }`}
        >
          <h4
            className={`text-[#3C3C3B] GeneralSans  whitespace-nowrap  ${
              option == 1
                ? `font-bold text-2xl md:text-4xl mb-6`
                : `font-medium text-lg`
            }`}
          >
            {data?.title}
          </h4>

          {option === 1 && <p>{data?.longDescription}</p>}

          <h6 className={`text-[#FC4242] GeneralSans font-semibold text-lg`}>
            AED {variationPrice}
          </h6>

          {btnAllow && (
            <div
              // onClick={modalDisplay}
              className={`group/btn max-w-[160px] Fedra-400  hover:max-w-[200px] max-w-[130px]  transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2 w-full bg-black h-12 px-4   text-gray-100 hover:text-white cursor-pointer whitespace-nowrap    `}
            >
              <div className="group-hover/btn:h-[24px]  h-0 transition-all">
                <ShoppingBag width={20} />
              </div>
              <p>Shop Now</p>
            </div>
          )}
        </div>
      </div>

      <Popup item={data} isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export default ProductItem;
