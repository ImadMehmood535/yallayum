import React from "react";
import {
  Healthiest_Snacking,
  Supporting_Dubai,
  Sustainable_Sourcing,
  Sustainable_Sourcing3,
} from "@/assets";
import ImpactItem from "./ImpactItem";

const OurImpact = () => {
  return (
    <div className="OurImpact pageLayout   px-0 mx-auto">
      <div className="container">
        <div className="  !pb-10">
          <div className="heading-area text-center">
            <div className="w-full md:max-w-[760px] mx-auto">
              <h4 className="sub-heading uppercase kalamFont text-[#B051AC] text-xl">
              Inspired by Love for Snacking
              </h4>
              <h2 className="text-5xl GeneralSans font-medium mb-7">
              Our Impact
              </h2>
              <p className="text-[#3C3C3B] font-regular GeneralSans">
              Dive into our latest blog posts and uncover a world of culinary adventures, wellness tips, and the rich tapestry of Dubai&apos;s culture. Stay updated, inspired, and engaged by subscribing to our blog your gateway to flavor, health, and local insights.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ImpactItem
              position={true}
              image={Sustainable_Sourcing}
              subheading="01"
              title="Wellness Tips"
              text="At YallaYum, We Prioritize a balanced diet, regular exercise, and adequate sleep for optimal wellness."
            />
            <ImpactItem
              position={true}
              image={Healthiest_Snacking}
              subheading="02"
              title=" Rich Tapestry of Dubai’s Culture"
              text="Immerse yourself in the captivating blend of traditional heritage and modern innovation that defines Dubai’s rich cultural tapestry."
            />
            <ImpactItem
              position={false}
              image={Sustainable_Sourcing3}
              subheading="03"
              title="YallaYum Combines Flavor with Nutrition"
              text="YallaYum seamlessly blends rich flavors with essential nutrients, offering delicious and healthy snack options."
            />
            <ImpactItem
              position={false}
              image={Supporting_Dubai}
              subheading="04"
              title="Benefits of YallaYum’s Freeze Dried Fruits"
              text="YallaYum’s freeze-dried fruits retain natural flavors and essential nutrients, making them a tasty and healthy snack choice."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
