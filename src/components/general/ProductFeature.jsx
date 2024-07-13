import React from "react";
import Image from "next/image";
import {
  Feature_area,
  GlutenFree,
  NoShugar,
  NonGmo,
  PremiumQuality,
  pic1,
  pic2,
  pic3,
} from "@/assets";
import IconBox from "../Home/IconBox";

const ProductFeature = () => {
  return (
    <div className="ProductFeature pageLayout px-0 mx-auto">
      <div className="container">
        <div className="heading-area text-center">
          <div className="w-full md:max-w-[760px] mx-auto">
            <h2 className="text-4xl kalamFont md:text-7xl text-bold mb-6 text-[#FC4242]  uppercase">
              healthy snacks for happy people
            </h2>
            <p className="text-[#3C3C3B] GeneralSans  font-regular">
              Our freeze-dried fruits are carefully crafted to retain their
              original flavor and nutrition, making them a healthy and delicious
              snack option. With no added sugars or preservatives, you can
              indulge in guilt-free snacking with YallaYum.
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-1 lg:grid-cols-4 items-center mt-14">
          <div className="feature-box flex flex-col h-full justify-between gap-4 mx-auto max-w-[350px] lg:w-full  ">
            <IconBox
              position="start"
              textposition="left"
              icon={NoShugar}
              title="No Added Sugar"
              content="At YallaYum, we prioritize your health by offering snacks with no added sugar, preserving the authentic flavors of Dubai. Enjoy the natural sweetness of our ingredients, ensuring a delightful and guilt-free snacking experience. Taste the essence of wellness with every bite."
            />
            <IconBox
              position="start"
              textposition="left"
              icon={PremiumQuality}
              title="Premium Quality"
              content="At YallaYum, we deliver premium quality snacks that embody the rich culinary heritage of Dubai. Each bite promises superior taste and exceptional standards, crafted from the finest ingredients. Elevate your snacking experience with YallaYum's unmatched excellence."
            />
          </div>

          <div className=" center-area col-span-2 mx-auto   px-8 o ">
            <div className="relative  group ">
              <div className="relative  z-20">
                <Image
                  src={pic1}
                  alt="Feature_area"
                  width={500}
                  height={500}
                  className="w-full max-w-[400px] sm:max-w-[500px] h-full "
                />
              </div>

              <div className="absolute transition-all group-hover:rotate-[15deg]  right-[10%]   group-hover:-right-[25%]  bottom-[2%]">
                <Image
                  src={pic2}
                  alt="Feature_area"
                  width={400}
                  height={400}
                  className="w-full max-w-[220px] sm:max-w-[350px] h-full"
                />
              </div>
              <div className="absolute transition-all group-hover:-rotate-[15deg]  left-[10%]    group-hover:-left-[25%] bottom-[2%]">
                <Image
                  src={pic3}
                  alt="Feature_area"
                  width={400}
                  height={400}
                  className="w-full max-w-[220px] sm:max-w-[350px] h-full"
                />
              </div>
            </div>
          </div>

          <div className="feature-box flex flex-col h-full justify-between gap-4 mx-auto max-w-[350px] lg:w-full  ">
            <IconBox
              position="end"
              textposition="right"
              icon={NonGmo}
              title="Non-GMO"
              content="At YallaYum, we are committed to your well-being with our Non-GMO snacks, crafted from the finest, naturally sourced ingredients. Enjoy the true taste of Dubai with the assurance of no genetic modifications. Snack healthy and feel the difference!"
            />
            <IconBox
              position="end"
              textposition="right"
              icon={GlutenFree}
              title="Gluten Free"
              content="At YallaYum, we cater to your dietary needs with our delicious gluten-free snacks. Savor the authentic flavors of Dubai without compromising on health. Enjoy guilt-free snacking that's both tasty and safe for your gluten-free lifestyle."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
