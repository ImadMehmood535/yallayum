"use client";
import React, { useEffect, useState } from "react";
import ProductItem from "../general/ProductItem";

const ProductList = ({ filteredProducts, selectedVariationType, option }) => {
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("xs");
      } else {
        setScreenSize("lg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="ProductList ">
      <div className="container">
        <div className="item-wrapper">
          <div
            className={`grid ${
              option == 1
                ? `grid-cols-1`
                : `${
                    screenSize === "xs"
                      ? "grid-cols-1"
                      : option === 2
                      ? "grid-cols-2 md:grid-cols-3"
                      : "md:grid-cols-3"
                  }`
            } gap-8`}
          >
            {filteredProducts.map((item, key) => (
              <ProductItem
                key={key}
                data={item}
                selectedVariationType={selectedVariationType}
                option={option}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
