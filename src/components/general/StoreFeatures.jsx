import React from "react";
import FeatureIconBox from "./FeatureIconBox";
import { guarantee_icon, purity_icon, shipping_icon } from "@/assets";

const StoreFeatures = () => {
  return (
    <div className="StoreFeatures pageLayout px-0 mx-auto bg-[#F9F1F8]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureIconBox
            position="center"
            textposition="center"
            icon={purity_icon}
            title="Purity Command"
            content="Only fully ripe fruit, no additives added."
          />
          <FeatureIconBox
            position="center"
            textposition="center"
            icon={guarantee_icon}
            title="30 day taste guarantee"
            content="If you don't like it, send it back within 30 days."
          />
          <FeatureIconBox
            position="center"
            textposition="center"
            icon={shipping_icon}
            title="Free shipping from AED 100"
            content="Free shipping is available from a shopping cart ."
          />
        </div>
      </div>
    </div>
  );
};

export default StoreFeatures;
