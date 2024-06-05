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
    <div className="ProductFeature pageLayout  px-0 mx-auto">
      <div className="container">
        <div className="heading-area text-center">
          <div className="w-full md:max-w-[760px] mx-auto">
            <h2 className="text-4xl kalamFont md:text-7xl text-bold mb-6 text-[#FC4242]  uppercase">
              healthy snacks for happy people
            </h2>
            <p className="text-[#3C3C3B]">
              Our freeze-dried fruits are carefully crafted to retain their
              original flavor and nutrition, making them a healthy and delicious
              snack option. With no added sugars or preservatives, you can
              indulge in guilt-free snacking with YallaYum.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center mt-14">
          <div className="feature-box flex flex-col h-full justify-between gap-4 mx-auto max-w-[350px] lg:w-full  ">
            <IconBox
              position={true}
              icon={NoShugar}
              title="No Added Sugar"
              content="Our freeze-dried fruits retain their natural nutrients, vitamins, and minerals, providing you with a wholesome snack option."
            />
            <IconBox
              position={true}
              icon={PremiumQuality}
              title="Premium Quality"
              content="Our freeze-dried fruits retain their natural nutrients, vitamins, and minerals, providing you with a wholesome snack option."
            />
          </div>
          <div className=" center-area col-span-2 mx-auto   px-8 o ">
            <div className="relative  group ">
              <div className="relative  z-20">
                <Image
                  src={pic1}
                  alt="Feature_area"
                  width={400}
                  height={400}
                  className="w-full max-w-[400px] h-full "
                />
              </div>

              <div className="absolute transition-all group-hover:rotate-[15deg]  right-[10%]   group-hover:-right-[25%]  bottom-[2%]">
                <Image
                  src={pic2}
                  alt="Feature_area"
                  width={300}
                  height={300}
                  className="w-full max-w-[250px] h-full"
                />
              </div>
              <div className="absolute transition-all group-hover:-rotate-[15deg]  left-[10%]    group-hover:-left-[25%] bottom-[2%]">
                <Image
                  src={pic3}
                  alt="Feature_area"
                  width={300}
                  height={300}
                  className="w-full max-w-[250px] h-full"
                />
              </div>
            </div>
          </div>
          <div className="feature-box flex flex-col h-full justify-between gap-4 mx-auto max-w-[350px] lg:w-full  ">
            <IconBox
              position={false}
              icon={NonGmo}
              title="Non-GMO"
              content="Our freeze-dried fruits retain their natural nutrients, vitamins, and minerals, providing you with a wholesome snack option."
            />
            <IconBox
              position={false}
              icon={GlutenFree}
              title="Gluten Free"
              content="Our freeze-dried fruits retain their natural nutrients, vitamins, and minerals, providing you with a wholesome snack option."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
