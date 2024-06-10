import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ data, variation, selectedVariationType, option }) => {
  const selectedVariation =
    variation ||
    data?.variation.find(
      (variation) => variation.variationType === selectedVariationType
    );

  const variationImage = selectedVariation?.variationImage.src;
  const variationPrice = selectedVariation?.variationPrice;

  return (
    <div
      className={`ProductItem group flex flex-col justify-center cursor-pointer transition-all duration-200 relative p-4`}
    >
      <Link href={`/shop/${data?.slug}?variation=${selectedVariation?.variationType}&id=${data.id}`}>
        <div
          className={`item-wrapper ${
            option == 1
              ? `w-full flex flex-col md:flex-row items-center`
              : `max-w-[200px] flip-container`
          } mx-auto`}
        >
          <div className="flip-contain">
            <Image
              src={variationImage}
              alt={data?.title}
              width={350}
              height={350}
              quality={100}
              className="h-auto md:h-[230px] 2xl:h-auto"
            />
          </div>
          <div
            className={`content-area ${
              option == 1 ? `text-center md:text-left` : `text-center`
            }`}
          >
            <h4
              className={`text-[#3C3C3B] GeneralSans whitespace-nowrap ${
                option == 1
                  ? `font-bold text-2xl md:text-4xl mb-6`
                  : `font-normal text-lg`
              }`}
            >
              {data?.title}
            </h4>

            {option === 1 && <p>{data?.longDescription}</p>}
            {option === 1 && (
              <h6
                className={`text-[#3C3C3B] GeneralSans font-semibold text-2xl whitespace-nowrap`}
              >
                AED {variationPrice}
              </h6>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
