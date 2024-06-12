"use client";
import React from "react";
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { homeBannerSlide } from "@/data/slides";
import Head from 'next/head';

// Dynamically import the AnimatedButton to defer its loading
const AnimatedButton = dynamic(() => import('../general/AnimatedButton'), {
  ssr: false,
});

const Banner = () => {
  let slidesData = [...homeBannerSlide];
  return (
    <div className="Banner">
 
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        loop={true}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          delay: 5000,
        }}
        modules={[Pagination, Autoplay]}
        className="BannnerSwiper"
      >
        {slidesData?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-item"
              style={{
                backgroundColor: slide?.bgColor,
 
              }}
            >
              <div className="container">
                <div className="min-h-[630px] flex flex-col md:flex-row justify-between items-end gap-2 md:px-8 pt-16 md:pt-8">
                  <div className="w-full md:w-2/4 content-area">
                       <div className="pb-[15%]  ">
                        <h1 className="font-bold mb-6 Fedra-700">{slide?.title}</h1>
                        <p className="max-w-[560px] mb-6 GeneralSans">
                          {slide?.description}
                        </p>
                        <AnimatedButton text={"BUY NOW"} shop={true} />
                      </div>
                
                  </div>

                  <div className="w-full md:max-w-[570px] img-area">
                    <Image
                      src={slide?.imageSrc}
                      alt={"Banner Image"}
                      width={800}
                      height={300}
                      quality={100}
                      className="w-full h-full"
                      loading="eager" // Ensure key images are loaded eagerly
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
