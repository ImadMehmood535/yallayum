"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import LinkButton from "../general/LinkButton";

const FeedSlider = ({ feedlist }) => {
  return (
    <div className="FeedSlider py-10 md:py-20 px-0 mx-auto">
      <div className="container">
        <div className="heading-area text-center mb-12">
          <div className="w-full md:max-w-[760px] mx-auto">
            <h4 className="sub-heading text-[#B051AC] text-xl uppercase">
              yalla yum on instagram
            </h4>
            <h2 className="text-5xl text-bold mb-4">You + Yalla Yum!</h2>
          </div>
        </div>
        <div className="feeds">
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="review-swiper"
          >
            {feedlist.map((feed, key) => (
              <SwiperSlide key={key}>
                <div className="item-wrapper border rounded-3xl overflow-hidden">
                  <Image
                    src={feed.image}
                    alt={feed.image}
                    quality={100}
                    width={800}
                    height={700}
                    className=" h-full min-h-[100%] group-hover:scale-75"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="!pt-10">
          <div className="btn-area flex justify-center">
            <LinkButton text={"Follow us on Instagram"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedSlider;
