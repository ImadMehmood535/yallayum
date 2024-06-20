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
                We love what we do
              </h4>
              <h2 className="text-5xl GeneralSans font-medium mb-7">
                Our Impact
              </h2>
              <p className="text-[#3C3C3B] font-regular GeneralSans">
                Explore our latest articles and embark on a journey of culinary
                discovery, health insights, and Dubai&apos;s vibrant culture.
                Stay informed, inspired, and engaged by subscribing to our blog
                today.
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
              title="Sustainable Sourcing"
              text="At YallaYum, we’re committed to responsible sourcing practices."
            />
            <ImpactItem
              position={true}
              image={Healthiest_Snacking}
              subheading="02"
              title="Sustainable Sourcing"
              text="At YallaYum, we’re committed to responsible sourcing practices."
            />
            <ImpactItem
              position={false}
              image={Sustainable_Sourcing3}
              subheading="03"
              title="Sustainable Sourcing"
              text="At YallaYum, we’re committed to responsible sourcing practices."
            />
            <ImpactItem
              position={false}
              image={Supporting_Dubai}
              subheading="04"
              title="Sustainable Sourcing"
              text="At YallaYum, we’re committed to responsible sourcing practices."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
