import React, { useState, useEffect } from "react";
import FilterMode from "./FilterMode";
import QuantitySelector from "../general/QuantitySelector";
import Image from "next/image";
import ProductInfoTabs from "./ProductInfoTabs";
import AddCartBtn from "./AddCartBtn";
import ProductStoreFeature from "./ProductStoreFeature";
import RatingNoOfReview from "./RatingNoOfReview";

const SingleShop = ({ data, selectedVariation, setFilter, filter, rating, total_review }) => {
  const [selectedImage, setSelectedImage] = useState(
    selectedVariation.variationImage
  );
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
    <div className="SingleShop pageLayout pb-10 md:pb-20">
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
              <h2 className="kalamFont uppercase text-5xl font-semibold">
                {data.title}
              </h2>
              <div className="rating-area my-4">
                <RatingNoOfReview avgrating={rating} totalReview={total_review} />
              </div>

              {/* <p className="GeneralSans text-lg font-normal">
                {data.shortDescription}
              </p> */}
              <div
                className="GeneralSans text-lg font-normal"
                dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              />
              <div className="mt-8 font-semibold GeneralSans flex flex-row gap-2 pb-4 border-b-1 items-end">
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
                <p>({currentVariation.variationWeight} gram)</p>
              </div>
            </div>
            <div className="quantity-variation-container my-6 flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2">
                <span className="GeneralSans text-lg font-normal">
                  Packages:
                </span>
                <FilterMode
                  setFilter={handleFilterChange}
                  activeFilter={currentVariation.variationType}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="GeneralSans text-lg font-normal">
                  Quantity:
                </span>
                <QuantitySelector />
              </div>
            </div>
            <div className="btn-area">
              <AddCartBtn />
            </div>
            <div className="feature mt-6">
              <ProductStoreFeature />
            </div>
          </div>
        </div>
        <div className="tabs-area">
          <ProductInfoTabs data={data} />
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
