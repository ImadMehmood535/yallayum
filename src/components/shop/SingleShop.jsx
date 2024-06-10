import React from "react";
import FilterMode from "./FilterMode";
import QuantitySelector from "../general/QuantitySelector";

const SingleShop = ({ data, selectedVariation, setFilter, filter }) => {
   
  return (
    <div className="SingleShop pb-10 md:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="image-area"></div>
          <div className="content-area">
            <div className="product-info">
              <h2 className="kalamFont text-4xl font-semibold mb-4">
                {data.title}
              </h2>
              <h4 className="text-[#FC4242] text-2xl mb-4 font-semibold GeneralSans">
                AED {selectedVariation.variationPrice}
              </h4>
              <p className="GeneralSans text-lg font-normal">
                {data.shortDescription}
              </p>
            </div>
            <div className="quantity-variation-container my-6 flex flex-row gap-6">
              <FilterMode
                setFilter={setFilter}
                activeFilter={selectedVariation.variationType}
              />
              <QuantitySelector/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
