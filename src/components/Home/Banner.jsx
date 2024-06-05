"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import AnimatedButton from "../general/AnimatedButton";
import { homeBannerSlide } from "@/data/slides";

const Banner = () => {
  return (
    <div className="Banner">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        // autoplay={{
        //delay: 2500,
        // }}
        modules={[Pagination, Autoplay]}
        className="BannnerSwiper"
      >
        {homeBannerSlide?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-item"
              style={{ backgroundColor: slide?.bgColor }}
            >
              <div className="container ">
                <div className="min-h-[630px] flex flex-col md:flex-row justify-between items-center gap-2 md:px-8 pt-16 md:pt-8">
                  <div className="w-full md:w-2/4 content-area">
                    {slide?.title ? (
                      <>
                        <h1 className="font-bold mb-6">{slide?.title}</h1>
                        <p className="max-w-[560px] mb-6">
                          {slide?.description}
                        </p>
                        <AnimatedButton text={"BUY NOW"} shop={true} />
                      </>
                    ) : (
                      <Image
                        src={slide?.firstimage}
                        alt={slide?.firstimage}
                        width={630}
                        height={540}
                        quality={100}
                      />
                    )}
                  </div>

                  <div className="w-full  md:max-w-[600px] img-area">
                    <Image
                      src={slide?.imageSrc}
                      alt={slide?.imageSrc}
                      width={800}
                      height={300}
                      quality={100}
                      className="w-full h-full"
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
