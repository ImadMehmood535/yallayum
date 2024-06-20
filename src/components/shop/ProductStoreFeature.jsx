import React from "react";

const ProductStoreFeature = () => {
  return (
    <div className="ProductStoreFeature px-2 py-4 sm:p-6 border border-black rounded-2xl">
      <div className="icon-list">
        <ul className="flex flex-col gap-2 text-sm font-medium">
          <li className="flex flex-row gap-1 items-center GeneralSans">
            <p className="GeneralSans text-base md:text-lg font-medium">
              ✓ 30 day taste guarantee
            </p>
          </li>
          <li className="flex flex-row gap-1 items-center">
            <p className="GeneralSans text-base md:text-lg font-medium">
              ✓ Yalla Yum Purity Law | 100% natural, 0% added sugar
            </p>
          </li>
          <li className="flex flex-row gap-1 items-center">
            <p className="GeneralSans text-base md:text-lg font-medium">
              ✓ Free shipping from 50€ (EU)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductStoreFeature;
