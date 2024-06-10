"use client";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import ProductFeature from "@/components/general/ProductFeature";
import ProductList from "@/components/shop/ProductList";
import React, { useEffect, useState } from "react";
import Filterbar from "@/components/shop/Filterbar";
import { productData } from "@/data/productData";

const Index = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("Packet");
  const [option, setOption] = useState(2);

  useEffect(() => {
    filterProductsByVariationType("Packet");
  }, []);

  const filterProductsByVariationType = (type) => {
    const filtered = productData.filter((product) =>
      product.variation.some((variation) => variation.variationType === type)
    );
    setFilteredProducts(filtered);
    setFilter(type);
  };

  return (
    <div className="shop-page">
      <InnerpageHeader pagetitle="Shop" />
      <div className="shop-body pageLayout px-0 mx-auto">
        <Filterbar
          filter={filter}
          setFilter={setFilter}
          filterProducts={filterProductsByVariationType}
          option={option}
          setOption={setOption}
        />
        <ProductList
          filteredProducts={filteredProducts}
          selectedVariationType={filter}
          option={option}
        />
      </div>
      <ProductFeature />
    </div>
  );
};

export default Index;
