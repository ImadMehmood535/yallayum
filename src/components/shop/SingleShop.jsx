import React, { useState, useEffect } from "react";
import FilterMode from "./FilterMode";
import QuantitySelector from "../general/QuantitySelector";
import Image from "next/image";

const SingleShop = ({ data, selectedVariation, setFilter, filter }) => {
  const [selectedImage, setSelectedImage] = useState(selectedVariation.variationImage);
  const [currentVariation, setCurrentVariation] = useState(selectedVariation);

  useEffect(() => {
    setSelectedImage(currentVariation.variationImage);
  }, [currentVariation]);

  const handleFilterChange = (variationType) => {
    const newVariation = data.variation.find(
      (variation) => variation.variationType === variationType
    );
    setCurrentVariation(newVariation);
    setSelectedImage(newVariation.variationImage);
    setFilter(variationType);
  };

  const allImages = [
    ...(data.gallery || []),
    ...data.variation.map((variation) => variation.variationImage),
  ];

  return (
    <div className="SingleShop pb-10 md:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="image-area">
            <div className="gallery-wrapper flex justify-center items-start gap-5 flex-col-reverse md:flex-row">
              <div className="gallery-area w-full md:w-1/6 justify-evenly md:justify-start flex flex-row md:flex-col">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    className="thumbnail"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${data.title} thumbnail ${index}`}
                      width={100}
                      height={100}
                      className="cursor-pointer mb-4 w-full rounded-2xl max-h-[200px]"
                    />
                  </div>
                ))}
              </div>
              <div className="feature-area w-full md:w-5/6 mx-auto">
                <img
                  src={selectedImage.src || selectedImage}
                  alt={data.title}
                  width={400}
                  height={500}
                  className="w-full mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="content-area py-6">
            <div className="product-info">
              <h2 className="kalamFont text-4xl font-semibold mb-4">
                {data.title}
              </h2>
              <div className="mb-4 font-semibold GeneralSans flex flex-row gap-2">
                {currentVariation.variationSalePrice ? (
                  <div className="price-area gap-6 flex flex-row items-end">
                    <span className="sale-price text-[#FC4242] text-3xl">
                      AED {currentVariation.variationSalePrice}
                    </span>
                    <span className="regular-price text-[#B0B0B0] line-through text-2xl">
                      AED {currentVariation.variationPrice}
                    </span>
                  </div>
                ) : (
                  <span className="regular-price text-[#FC4242] text-3xl">
                    AED {currentVariation.variationPrice}
                  </span>
                )}
              </div>
              <p className="GeneralSans text-lg font-normal">
                {data.shortDescription}
              </p>
            </div>
            <div className="quantity-variation-container my-6 flex flex-row gap-6">
              <FilterMode
                setFilter={handleFilterChange}
                activeFilter={currentVariation.variationType}
              />
              <QuantitySelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;