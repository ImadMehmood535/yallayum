"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
 import Image from "next/image";
import { Banner_slide_1, Banner_slide_2, Banner_slide_3, banner0 } from "@/assets";
import Link from "next/link";
import AnimatedButton from "../general/AnimatedButton";

const Banner = () => {
  return (
    <div className="Banner">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
         }}
        modules={[Pagination , Autoplay]}
        className="BannnerSwiper"
      >
       
        <SwiperSlide>
          <div className="banner-item bg-[#F9F4ED]">
            <div className="container">
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:px-8 pt-16 md:pt-8">
                <div className="w-full md:w-2/4 content-area">
                  <h1 className="font-bold mb-6">
                    Experience a timeless delight with freeze-dried fruits
                  </h1>
                  <p className="max-w-[560px] mb-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                  </p>

                  <AnimatedButton text={"BUY NOW"} shop={true} />
                </div>
                <div className="w-full md:w-2/4 img-area">
                <Image
                    src={Banner_slide_1}
                    alt={Banner_slide_1}
                    width={800}
                    height={300}
                    quality={100}
                    // layout="responsive"
                    className="w-full h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-item bg-[#FAF4FA]">
            <div className="container">
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:px-8 pt-16 md:pt-8">
                <div className="w-full md:w-2/4 content-area">
                  <h1 className="font-bold mb-6">
                    Experience a timeless delight with freeze-dried fruits
                  </h1>
                  <p className="max-w-[560px] mb-6  ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                  </p>

                  <AnimatedButton text={"BUY NOW"} shop={true} />

                </div>
                <div className="w-full md:w-2/4 img-area">
                  <Image
                    src={Banner_slide_2}
                    alt={Banner_slide_2}
                    width={800}
                    height={300}
                    quality={100}
                    // layout="responsive"
                    className="w-full h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-item bg-[#FFF5F5]">
            <div className="container">
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:px-8 pt-16 md:pt-8">
                <div className="w-full md:w-2/4 content-area">
                  <h1 className="font-bold mb-6">
                    Experience a timeless delight with freeze-dried fruits
                  </h1>
                  <p className="max-w-[560px] mb-6  ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                  </p>

                  <AnimatedButton text={"BUY NOW"} shop={true} />

                </div>
                <div className="w-full md:w-2/4 img-area">
                  <Image
                    src={Banner_slide_3}
                    alt={Banner_slide_3}
                    width={800}
                    height={300}
                    quality={100}
                    // layout="responsive"
                    className="w-full h-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
