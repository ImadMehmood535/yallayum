"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import VideoItem from "./VideoItem";

const VideoSlider = ({ videoData }) => {
  return (
    <div className="    mx-auto max-w-[77%]  flex justify-center items-center    w-full">
      <div className="container w-full">
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
          >
            {videoData?.map((item, key) => (
              <SwiperSlide key={key}>
                <VideoItem videoData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
