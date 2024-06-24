import React, { useState, useEffect } from "react";
import FilterMode from "./FilterMode";
import QuantitySelector from "../general/QuantitySelector";
import Image from "next/image";
import ProductInfoTabs from "./ProductInfoTabs";
import AddCartBtn from "./AddCartBtn";
import ProductStoreFeature from "./ProductStoreFeature";
import RatingNoOfReview from "./RatingNoOfReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const SingleShop = ({
  data,
  selectedVariation,
  setFilter,
  filter,
  rating,
  total_review,
}) => {
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
            <div className="gallery-wrapper flex justify-center items-start gap-5 flex-col ">
              <div
                className="feature-area w-full mx-auto bg-contain bg-center bg-no-repeat w-full h-[500px] bg-[#FAF1DC] rounded-2xl"
                style={{
                  backgroundImage: `url( ${
                    selectedImage.src || selectedImage
                  }) `,
                }}
              ></div>
              <div className="w-full  ">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                  breakpoints={{
                    540: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                  className="gallery-slider"
                >
                  {allImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        key={index}
                        className="thumbnail bg-contain bg-center bg-no-repeat h-[200px] bg-[length:150px_160px] bg-[#FAF1DC] rounded-2xl w-full"
                        style={{ backgroundImage: `url(${image.src})` }}
                        onClick={() => setSelectedImage(image)}
                      ></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="content-area py-6">
            <div className="product-info">
              <h2 className="kalamFont uppercase text-5xl font-semibold">
                {data.title}
              </h2>
              <div className="rating-area my-4">
                <RatingNoOfReview
                  avgrating={rating}
                  totalReview={total_review}
                />
              </div>

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
        <div className=" mt-6">
          <ProductInfoTabs data={data} />
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
