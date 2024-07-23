"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { homeBannerSlide } from "@/data/slides";
import AnimatedButton from "../general/AnimatedButton";
import { ShoppingBag } from "@/data/allSvgs";
import Link from "next/link";

const Banner = () => {
  const [active, setActive] = useState(false);
  let slidesData = [...homeBannerSlide];
  return (
    <div className="Banner">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
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
                  <div
                    className={`w-full md:w-2/4 content-area h-[400px] flex justify-center items-center md:h-[600px]`}
                  >
                    {slide?.title ? (
                      <div className="pb-[15%]  ">
                        <h1 className="font-bold mb-6 Fedra-700">
                          {slide?.title}
                        </h1>
                        <p className="max-w-[560px] mb-6 GeneralSans">
                          {slide?.description}
                        </p>
                        {/* <AnimatedButton text={"BUY NOW"} shop={true} /> */}

                        <Link
                          onMouseEnter={() => setActive(true)}
                          onMouseLeave={() => setActive(false)}
                          href={slide?.link}
                          className={`group max-w-[160px] Fedra-400 hover:max-w-[200px] transition-all text-[12px] hover:text-[13px] font-semibold  rounded-full flex justify-center items-center gap-0 hover:gap-2 w-full bg-black h-12 px-4   text-gray-100 hover:text-white cursor-pointer whitespace-nowrap ${
                            active ? "buttonShadow" : ""
                          }   `}
                        >
                          <div className="group-hover:h-[24px]  h-0 transition-all">
                            <ShoppingBag width={20} />
                          </div>
                          <p>{slide?.btntext}</p>
                        </Link>
                      </div>
                    ) : (
                      <Image
                        src={slide?.firstimage}
                        alt={"Slide Image"}
                        width={800}
                        height={800}
                        quality={100}
                        className="object-cover max-w-[400px] w-full h-auto"
                        loading="eager"
                      />
                    )}
                  </div>

                  <div
                    className={`w-full h-[400px] md:h-[600px] img-area  ${
                      slide?.firstimage ? `md:w-[80%]` : `md:max-w-[570px]`
                    }`}
                  >
                    <Image
                      src={slide?.imageSrc}
                      alt={"Banner Image"}
                      width={800}
                      height={300}
                      quality={100}
                      className="object-cover   w-full h-full"
                      loading="eager"
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
