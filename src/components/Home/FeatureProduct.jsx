"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../general/ProductItem";

const FeatureProduct = ({ data }) => {
  return (
    <div className="FeatureProduct py-10 md:py-20 md:pb-10   px-0 md:px-[5%] mx-auto">
      <div className="container">
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="feature_product_slider featuredProduct"
        >
          {data?.map((item, key) => (
            <SwiperSlide key={key}>
              <ProductItem data={item} slider={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProduct;
