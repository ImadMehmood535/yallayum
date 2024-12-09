import SingleShop from "@/components/shop/SingleShop";
import React from "react";
import ProductReview from "@/components/shop/ProductReview";
import RecipesList from "@/components/recipes/RecipesList";
import RelatedProduct from "@/components/shop/RelatedProduct";
import ProductFeature from "../general/ProductFeature";

const ShopSlugPage = ({ product, relateddata, reviewData, recipes }) => {

  console.log(product , "product")
  return (
    <div className="single-product">
      <div className="  px-0 mx-auto">
        <SingleShop
          reviewData={reviewData}
          data={product}
          rating={4}
          total_review={10}
        />
        <ProductReview id={product?.id} data={reviewData} />

        <RelatedProduct
          data={relateddata}
          itemCount={4}
          title="Customers Also Bought
"
        />
        <RecipesList
          data={recipes}
          itemCount={3}
          title="Recipes"
          btntext="Explore More"
          btnlink={"/recipes"}
        />

        <ProductFeature />
      </div>
    </div>
  );
};

export default ShopSlugPage;
