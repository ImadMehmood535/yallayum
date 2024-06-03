"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const FeatureProduct = ({ data }) => {
  return (
    <div className="FeatureProduct py-10 px-0 md:px-[5%] mx-auto">
      <div className="container">
        {data.length > 6 ? (
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                540: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
            navigation={true}
            modules={[Navigation]}
            className="feature_product_slider"
          >
            {data.map((item, key) => (
              <SwiperSlide key={key}>
                {" "}
                <ProductItem data={item} slider={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-6 gap-6">
            {data.map((item, key) => (
              <div className="item" key={key}>
                <ProductItem data={item} slider={false} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureProduct;
