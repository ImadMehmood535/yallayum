"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Banner_slide_1, Banner_slide_2, Banner_slide_3 } from "@/assets";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="Banner">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
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
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>

                  <Link href={"/"} className="cus-btn table">
                    Buy Now
                  </Link>
                </div>
                <div className="w-full md:w-2/4 img-area">
                <img src={Banner_slide_1.src} alt={Banner_slide_1} className="w-full h-full" />
                  
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
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>

                  <Link href={"/"} className="cus-btn table">
                    Buy Now
                  </Link>
                </div>
                <div className="w-full md:w-2/4 img-area">
                  <Image
                    src={Banner_slide_2}
                    alt={Banner_slide_2}
                    width={1400}
                    height={1400}
                    quality={100}
                    layout="responsive"
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
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>

                  <Link href={"/"} className="cus-btn table">
                    Buy Now
                  </Link>
                </div>
                <div className="w-full md:w-2/4 img-area">
                  <Image
                    src={Banner_slide_3}
                    alt={Banner_slide_3}
                    width={1400}
                    height={1400}
                    quality={100}
                    layout="responsive"
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
