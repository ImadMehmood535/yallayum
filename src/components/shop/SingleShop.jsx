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

const SingleShop = ({ reviewData, data, rating, total_review }) => {
  const [allImages, setAllImages] = useState([
    ...data?.productVariation[0]?.gallery,
  ]);
  const [variation, setVariation] = useState(data?.productVariation[0]);

  const [selectedImage, setSelectedImage] = useState(
    data?.productVariation[0]?.imageUrl
  );

  const [quantity, setQuantity] = useState(1);

  const authorized = getCookie("token");

  return (
    <div className="SingleShop pageLayout pb-10 md:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="image-area">
            <div className="gallery-wrapper flex justify-center items-start gap-5 flex-col ">
              <div
                className="feature-area w-full mx-auto bg-center bg-contain bg-no-repeat  h-[500px] bg-[#FAF1DC] rounded-2xl"
                style={{
                  backgroundImage: `url( ${selectedImage}) `,
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
                        className="thumbnail bg-contain bg-center bg-no-repeat h-[200px] cursor-pointer bg-[#FAF1DC] rounded-2xl w-full"
                        style={{ backgroundImage: `url(${image})` }}
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
                {data?.name}
              </h2>
              <div className="rating-area my-4">
                <RatingNoOfReview
                  avgrating={reviewData?.averageRating}
                  totalReview={reviewData?.totalReviews}
                />
              </div>

              <div
                className="GeneralSans text-lg font-normal"
                dangerouslySetInnerHTML={{ __html: data.shortDescription }}
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

              {!authorized && (
                <Link
                  href={"/login"}
                  className={`group w-full Fedra-400 transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2  bg-black py-3 px-4 text-gray-100 hover:text-white cursor-pointer whitespace-nowrap   `}
                >
                  <div className="group-hover:h-[24px]  h-0 transition-all">
                    <ShoppingBag width={20} />
                  </div>
                  <p>Please Login to add to cart</p>
                </Link>
              )}
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
