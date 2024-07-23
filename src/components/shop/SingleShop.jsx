"use client";
import React, { useState, useEffect } from "react";
import FilterMode from "./FilterMode";
import QuantitySelector from "../general/QuantitySelector";
import ProductInfoTabs from "./ProductInfoTabs";
import AddCartBtn from "./AddCartBtn";
import ProductStoreFeature from "./ProductStoreFeature";
import RatingNoOfReview from "./RatingNoOfReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { getCookie } from "@/hooks/cookies";
import { ShoppingBag } from "@/data/allSvgs";
import Link from "next/link";
import LoginModal from "../general/LoginModal";
import Image from "next/image";

const SingleShop = ({ reviewData, data, rating, total_review }) => {
  const [allImages, setAllImages] = useState([
    ...data?.productVariation[0]?.gallery,
  ]);
  const [variation, setVariation] = useState(data?.productVariation[0]);

  const [selectedImage, setSelectedImage] = useState(
    data?.productVariation[0]?.gallery[0]
  );

  const [quantity, setQuantity] = useState(1);

  const authorized = getCookie("token");

  const replaceIconCodesWithEmojis = (text) => {
    return text.replace(/\[`(U\+\w+)\`]/g, (match, p1) => {
      const codePoint = parseInt(p1.replace("U+", ""), 16);
      const emoji = String.fromCodePoint(codePoint);
      return `<span class="emoji">${emoji}</span>`;
    });
  };

  const processedDescription = replaceIconCodesWithEmojis(
    data.shortDescription
  );
   

  return (
    <div className="SingleShop pageLayout pb-10 md:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="image-area">
            <div className="gallery-wrapper flex justify-center items-start gap-5 flex-col ">
              <div className="feature-area w-full mx-auto  rounded-2xl">
                <Image
                  src={selectedImage}
                  alt={data?.name}
                  width={1800}
                  height={1800}
                  quality={100}
                />
              </div>

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
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  className="gallery-slider"
                >
                  {allImages?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        key={index}
                        className="thumbnail bg-contain bg-center bg-no-repeat h-[200px] cursor-pointer  rounded-2xl w-full"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image}
                          alt={data?.name}
                          width={480}
                          height={480}
                          quality={100}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="content-area py-6">
            <div className="product-info">
              <h2 className="kalamFont uppercase text-5xl font-semibold">
                {data?.name}
              </h2>
              <div className="rating-area my-4">
                <RatingNoOfReview
                  avgrating={reviewData?.averageRating}
                  totalReview={reviewData?.totalReviews}
                />
              </div>

              {/* <div U+1F353
                className="GeneralSans text-lg font-normal customList"
                dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              /> */}
              <div
                className="GeneralSans text-lg font-normal customList"
                dangerouslySetInnerHTML={{ __html: processedDescription }}
              />
              <div className="mt-8 font-semibold GeneralSans flex flex-row gap-2 pb-4 border-b-1 items-end">
                <div className="price-area gap-6 flex flex-row items-end">
                  <span className="sale-price text-[#FC4242] text-3xl">
                    AED {variation?.salePrice}
                  </span>
                  <span className="regular-price text-[#B0B0B0] line-through text-2xl">
                    AED {variation?.price}
                  </span>
                </div>

                <p>({variation?.weight} gram)</p>
              </div>
            </div>
            <div className="quantity-variation-container my-6 flex flex-col md:flex-row gap-6">
              {data?.productVariation?.length > 1 && (
                <div className="flex flex-col gap-2">
                  <span className="GeneralSans text-lg font-normal">
                    Packages:
                  </span>
                  <FilterMode
                    changeVariantImages={setAllImages}
                    data={data}
                    setSelectedImage={setSelectedImage}
                    setVariation={setVariation}
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <span className="GeneralSans text-lg font-normal">
                  Quantity:
                </span>
                <QuantitySelector
                  setQuantity={setQuantity}
                  quantity={quantity}
                />
              </div>
            </div>
            <div className="btn-area relative">
              {authorized && (
                <AddCartBtn
                  productVariationId={variation?.id}
                  quantity={quantity}
                />
              )}

              {!authorized && <LoginModal />}
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
