"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../general/ProductItem";

const RelatedProduct = ({ data, itemCount, btntext, btnlink, title }) => {
  const allProducts = data?.flatMap((product) =>
    product?.variation?.map((variation) => ({
      ...variation,
      id: product?.id,
      variationId: variation.id,
      name: product?.name,
      slug: product?.slug,
    }))
  );
 
  return (
    <div className="RelatedProduct pageLayout">
      <div className="container">
        {title && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-between gap-4 mb-6">
            <div className="review-overview">
              <h2 className="GeneralSans text-4xl font-medium">{title}</h2>
            </div>
            {btntext && (
              <div className="adreview-btn">
                <Link
                  href={btnlink}
                  className="GeneralSans text-lg font-semibold rounded-full bg-black py-4 px-12 text-gray-100 cursor-pointer table"
                >
                  {btntext}
                </Link>
              </div>
            )}
          </div>
        )}
        <div className="item-wrapper">
          <Swiper
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 20,
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
            className="feature_product_slider featuredProduct"
          >
            
            {allProducts.map((product, productkey) => (
              <SwiperSlide key={productkey}>
                <ProductItem
                  data={product}
                  variation={productkey}
                  slider={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
