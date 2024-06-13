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
  let slidesData = [...homeBannerSlide];
  return (
    <div className="Banner">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable:true
        }}
        loop={true}
        // autoplay={{
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        //   delay: 5000,
        // }}
        modules={[Pagination, Autoplay]}
        className="BannnerSwiper"
      >
        {slidesData?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-item"
              style={{
                backgroundColor: slide?.bgColor,
                backgroundImage: slide?.bannerBackground
                  ? `url(${slide?.bannerBackground?.src})`
                  : null,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container">
                <div className="min-h-[630px] flex flex-col md:flex-row justify-between items-end gap-2 md:px-8 pt-16 md:pt-8">
                  <div className="w-full md:w-2/4 content-area">
                    {slide?.title ? (
                      <div className="pb-[15%]  ">
                        <h1 className="font-bold mb-6 Fedra-700">{slide?.title}</h1>
                        <p className="max-w-[560px] mb-6 GeneralSans">
                          {slide?.description}
                        </p>
                        <AnimatedButton text={"BUY NOW"} shop={true} />
                      </div>
                    ) : (
                      <Image
                        src={slide?.firstimage}
                        alt={slide?.firstimage}
                        width={630}
                        height={540}
                        quality={100}
                        className="object-contain w-auto h-auto"
                      />
                    )}
                  </div>

                  <div className="w-full md:max-w-[570px] img-area">
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