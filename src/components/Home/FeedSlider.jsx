"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import LinkButton from "../general/LinkButton";

const FeedSlider = ({ feedlist }) => {
  const swiperRef = useRef(null);

  return (
    <div className="FeedSlider pageLayout px-0 mx-auto  ">
      <div className="heading-area text-center mb-12">
        <div className="w-full md:max-w-[760px] mx-auto">
          <h4 className="sub-heading kalamFont text-[#B051AC] text-xl uppercase">
            yalla yum on instagram
          </h4>
          <h2 className="GeneralSans text-5xl font-medium mb-4">
            You + Yalla Yum!
          </h2>
        </div>
      </div>
      <div className="feeds">
        <Swiper
          slidesPerView={1}
          freeMode={false}
          loop={2}
          centeredSlides={true}
          className="feed-slider"
          breakpoints={{
            499: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode]}
          ref={swiperRef}
        >
          {feedlist?.map((feed, key) => (
            <SwiperSlide key={key}>
              <div className="item-wrapper group  w-full border rounded-[24px] overflow-hidden">
                <Image
                  src={feed?.image}
                  alt={feed?.image}
                  quality={100}
                  width={700}
                  height={440}
                  className="h-full  group-hover:scale-125 transition-all object-fit object-center"
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
  );
};

export default FeedSlider;
