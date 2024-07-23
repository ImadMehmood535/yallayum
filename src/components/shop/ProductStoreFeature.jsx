import React from "react";

const ProductStoreFeature = ({ name }) => {
  return (
    <div className="ProductStoreFeature px-2 py-4 sm:p-6 border border-black rounded-2xl">
      <div className="icon-list">
        <ul className="flex flex-col gap-2 text-sm font-medium">
          <li>
            <p className="GeneralSans text-base md:text-lg font-medium">
              Available immediately | Delivery time: 1-3 working days
            </p>{" "}
          </li>
          <li className="flex flex-row gap-1 items-center GeneralSans">
            <p className="GeneralSans text-base md:text-lg font-bold">
              30-Day Taste Guarantee:{" "}
              <span className="font-normal ">
                {" "}
                Not satisfied? Let us know within 30 days. Find out more about
                our satisfaction promise.
              </span>
            </p>
          </li>
          <li className="flex flex-row gap-1 items-center GeneralSans">
            <p className="GeneralSans text-base md:text-lg font-bold">
              100% Natural, 0% Added Sugar:
              <span className="font-normal ">
                {" "}
                Adhering to the highest standards of purity, our{" "}
                <span className="font-medium">{name}</span> are free from any
                additives.
              </span>
            </p>
          </li>
          <li className="flex flex-row gap-1 items-center GeneralSans">
            <p className="GeneralSans text-base md:text-lg font-bold">
              Free Shipping on Orders Over 200AED:
              <span className="font-normal ">
                {" "}
                Enjoy free delivery when you spend over 200AED within the EU.
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductStoreFeature;
