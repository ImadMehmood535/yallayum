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
    const allProducts = products?.flatMap((product) =>
      product?.variation?.map((variation) => ({
        ...variation,
        id: product?.id,
        variationId: variation.id,
        name: product?.name,
        slug: product?.slug,
      }))
    );

    const filtered = products?.flatMap((product) =>
      product.variation
        .filter((variation) => variation?.categoryId === cateid)
        .map((variation) => ({
          ...variation,
          id: product?.id,
          variationId: variation.id,
          name: product?.name,
          slug: product?.slug,
        }))
    );

    setFilteredProducts(filtered?.length === 0 ? allProducts : filtered);
  };

  return (
    <div className="shop-page">
      <div className="shop-body pageLayout px-0 mx-auto">
        <div className="pb-10 md:pb-20">
          <div className="md:pb-20 px-0 md:px-[5%] mx-auto">
            <CategoryList
              itemCount={4}
              data={categories}
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

export default ShopePage;
