"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineStar } from "react-icons/md";

const ReviewSlider = ({ reviewData, arabic }) => {
  return (
    <div className="ReviewSlider container ">
      <div className="bg-white rounded-xl p-6 custom-shadow">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          // pagination={{
          //   clickable: false,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="review-swiper"
        >
          {reviewData.map((review, key) => (
            <SwiperSlide key={key}>
              <div className="item-wrapper">
                <div className="rating-wrapper mb-4 flex gap-1">
                  {Array.from({ length: review.review }).map((_, index) => (
                    <MdOutlineStar
                      key={index}
                      className="text-[#FC4242] text-lg"
                    />
                  ))}
                </div>
                <p
                  className={`${
                    arabic ? "text-right" : ""
                  } text-[#2E2E27] GeneralSans font-normal text-sm leading-5 mb-4`}
                >
                  &quot;{review.comment}&quot;
                </p>
                <h6
                  className={`font-bold text-base Fedra-400 ${
                    arabic ? "text-right" : ""
                  }`}
                >
                  {review.username}
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
