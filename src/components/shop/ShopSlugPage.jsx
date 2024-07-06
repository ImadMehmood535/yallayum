"use client";
import ProductFeature from "@/components/general/ProductFeature";
import SingleShop from "@/components/shop/SingleShop";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { productData } from "@/data/productData";
import StoreFeatures from "@/components/general/StoreFeatures";
import ProductReview from "@/components/shop/ProductReview";
import { allproductreview } from "@/data/allproductreview";
import RecipesList from "@/components/recipes/RecipesList";
import { recipesData } from "@/data/recipesData";
import RelatedProduct from "@/components/shop/RelatedProduct";
import { getProductById } from "@/cached-requests";

const ShopSlugPage = ({ product }) => {
//   const [filter, setFilter] = useState(variationType);
  const [relatedProduct, setRelatedProduct] = useState(null);
  // let rating =  allproductreview.avgrating;
  // let total_review =  allproductreview.numOfReview;

  // const selectedVariation = product?.variation.find(
  //   (variation) => variation.variationType === variationType
  // );

  console.log(product , "product")
  return (
    <div className="single-product">
      <div className="  px-0 mx-auto">
      
            <SingleShop
              data={product}
               rating={4}
              total_review={10}
            />
            {/* <RelatedProduct
            data={recipesData}
            itemCount={3}
            title="Related Products"
          />
          <RecipesList
            data={recipesData}
            itemCount={3}
            title="Recipes"
            btntext="Explore More"
            btnlink={"/recipes"}
          />
          <ProductFeature />
          <ProductReview data={allproductreview} />
          <StoreFeatures /> */}
         
      
      </div>
    </div>
  );
};

export default ShopSlugPage;
