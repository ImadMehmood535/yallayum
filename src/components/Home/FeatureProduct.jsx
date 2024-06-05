"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";

import ProductItem from "../general/ProductItem";

const FeatureProduct = ({ data }) => {
  return (
    <div className="FeatureProduct pageLayout py-16 px-0 md:px-[5%] mx-auto">
      <div className="container">
        {data.length > 4 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 2,
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
            modules={[Pagination, Autoplay]}
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
          <div className="grid grid-cols-1  place-items-end  md:grid-cols-2 xl:grid-cols-6 gap-6">
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
