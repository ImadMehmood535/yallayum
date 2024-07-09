import ProductFeature from "@/components/general/ProductFeature";
import SingleShop from "@/components/shop/SingleShop";
import React from "react";
import { productData } from "@/data/productData";
import StoreFeatures from "@/components/general/StoreFeatures";
import ProductReview from "@/components/shop/ProductReview";
import { allproductreview } from "@/data/allproductreview";
import RecipesList from "@/components/recipes/RecipesList";
import { recipesData } from "@/data/recipesData";
import RelatedProduct from "@/components/shop/RelatedProduct";
import { getProductById } from "@/cached-requests";

const ShopSlugPage = ({ product, relateddata, reviewData, recipes }) => {
  return (
    <div className="single-product">
      <div className="  px-0 mx-auto">
        <SingleShop
          reviewData={reviewData}
          data={product}
          rating={4}
          total_review={10}
        />
        <RelatedProduct
          data={relateddata}
          itemCount={4}
          title="Related Products"
        />
        <RecipesList
          data={recipes}
          itemCount={3}
          title="Recipes"
          btntext="Explore More"
          btnlink={"/recipes"}
        />

        <ProductReview data={reviewData} />

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
