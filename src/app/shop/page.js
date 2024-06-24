"use client";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import ProductFeature from "@/components/general/ProductFeature";
import ProductList from "@/components/shop/ProductList";
import React, { useEffect, useState } from "react";
import { productData } from "@/data/productData";
import CategoryList from "@/components/shop/CategoryList";
import { CategoryData } from "@/data/CategoryData";
import StoreFeatures from "@/components/general/StoreFeatures";
import Filterbar from "@/components/shop/Filterbar";

const Index = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState(null);
  const [option, setOption] = useState(2);

  useEffect(() => {
    filterProductsByCategory(filter);
  }, [filter]);

  const filterProductsByCategory = (cateid) => {
    if (cateid === null) {
      const allProducts = productData.flatMap((product) =>
        product.variation.map((variation) => ({
          ...variation,
          id: product.id,
          title: product.title,
          slug: product.slug,
        }))
      );
      setFilteredProducts(allProducts);
    } else {
      const filtered = productData.flatMap((product) =>
        product.variation
          .filter((variation) => variation.cateid === cateid)
          .map((variation) => ({
            ...variation,
            title: product.title,
            slug: product.slug,
          }))
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="shop-page">
      {/* <InnerpageHeader pagetitle="Shop" /> */}
      <div className="shop-body pageLayout px-0 mx-auto">
        <div className="pb-10 md:pb-20">
          <div className="md:pb-20 px-0 md:px-[5%] mx-auto">
            <CategoryList
              itemCount={4}
              data={CategoryData}
              setFilter={setFilter}
            />
          </div>

          <ProductList
            filteredProducts={filteredProducts}
            selectedVariationType={filter}
            option={option}
            btnAllow={true}
          />
        </div>
        <ProductFeature />
      </div>
      <StoreFeatures />
    </div>
  );
};

export default Index;
