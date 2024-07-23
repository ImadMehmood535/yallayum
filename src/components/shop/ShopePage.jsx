"use client";
import ProductFeature from "@/components/general/ProductFeature";
import ProductList from "@/components/shop/ProductList";
import React, { useEffect, useState } from "react";
import CategoryList from "@/components/shop/CategoryList";
import StoreFeatures from "@/components/general/StoreFeatures";

const ShopePage = ({ categories, products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState(null);
  const [option, setOption] = useState(2);

  useEffect(() => {
    filterProductsByCategory(filter);
  }, [filter]);

  const filterProductsByCategory = (cateid) => {
    const allProducts = products?.map((product) => {
      const variation = product?.variation; // Get the only variation
      return {
        ...variation,
        id: product?.id,
        variationId: variation?.id,
        name: product?.name,
        slug: product?.slug,
      };
    });
  
    const filtered = products?.map((product) => {
      const variation = product?.variation; // Get the only variation
      if (variation?.categoryId === cateid) {
        return {
          ...variation,
          id: product?.id,
          variationId: variation?.id,
          name: product?.name,
          slug: product?.slug,
        };
      }
      return null;
    }).filter(Boolean); // Remove null entries
  
    setFilteredProducts(filtered?.length === 0 ? allProducts : filtered);
  };
  

  const [categoryName, setCategoryName] = useState(categories[0]?.name);

  return (
    <div className="shop-page">
      <div className="shop-body pageLayout px-0 mx-auto">
        <div className="pb-10 md:pb-20">
          <div className="md:pb-20 px-0 md:px-[5%] mx-auto">
            <CategoryList
              itemCount={4}
              data={categories}
              setFilter={setFilter}
              setCategoryName={setCategoryName}
            />
          </div>

          <h1 className="text-center kalamFont mt-12 md:-mt-8y font-medium  text-[#FC4242]  flex justify-center items-center max-w-[300px] md:max-w-[500px] w-full mx-auto rounded-[25px]">
            {categoryName}
          </h1>

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

export default ShopePage;
