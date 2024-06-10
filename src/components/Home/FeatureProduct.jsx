"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../general/ProductItem";

const FeatureProduct = ({ data }) => {
  const [selectedVariationTypes, setSelectedVariationTypes] = useState({});

  useEffect(() => {
    const initialSelectedVariationTypes = data.reduce((acc, _, index) => {
      acc[index] = index < 3 ? "Packet" : "Box";
      return acc;
    }, {});
    setSelectedVariationTypes(initialSelectedVariationTypes);
  }, [data]);

  const handleSelectedVariationChange = (productKey, variationType) => {
    setSelectedVariationTypes((prev) => ({
      ...prev,
      [productKey]: variationType,
    }));
  };

  return (
    <div className="FeatureProduct py-10 md:py-20 md:pb-10 px-0 md:px-[5%] mx-auto">
      <div className="container">
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
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="feature_product_slider featuredProduct"
        >
          {data?.map((product, productKey) => (
            product.variation.map((variation, variationKey) => (
              <SwiperSlide key={`${productKey}-${variationKey}`}>
                <ProductItem
                  key={`${productKey}-${variationKey}`}
                  data={product}
                  variation={variation}
                  selectedVariationType={
                    selectedVariationTypes[productKey] ||
                    product.variation[0].variationType
                  }
                  onClick={() =>
                    handleSelectedVariationChange(
                      productKey,
                      variation.variationType
                    )
                  }
                  slider={true}
                />
              </SwiperSlide>
            ))
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProduct;
