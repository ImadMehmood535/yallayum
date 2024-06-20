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

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const variationType = searchParams.get("variation");
  const [filter, setFilter] = useState(variationType);
  const [relatedProduct, setRelatedProduct] = useState(null);
  let rating =  allproductreview.avgrating;
  let total_review =  allproductreview.numOfReview;

  const product = productData.find((product) => product.id === parseInt(id));

  const selectedVariation = product?.variation.find(
    (variation) => variation.variationType === variationType
  );

  return (
    <div className="single-product">
      <div className="  px-0 mx-auto">
        {product && selectedVariation ? (
          <>
            <SingleShop
              data={product}
              selectedVariation={selectedVariation}
              setFilter={setFilter}
              filter={filter}
              rating={rating}
              total_review={total_review}
            />
            <RelatedProduct data={recipesData} itemCount={3} title="Related Products"  />
            <RecipesList data={recipesData} itemCount={3} title="Recipes" btntext="Explore More" btnlink={"/recipes"} />
            <ProductFeature />
            <ProductReview data={allproductreview}/>
            <StoreFeatures/>
          </>
        ) : (
          <p>Product or variation not found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
