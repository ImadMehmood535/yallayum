 import SingleShop from "@/components/shop/SingleShop";
import React from "react";
  import ProductReview from "@/components/shop/ProductReview";
 import RecipesList from "@/components/recipes/RecipesList";
 import RelatedProduct from "@/components/shop/RelatedProduct";
 
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
        <ProductReview data={reviewData} />

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
      </div>
    </div>
  );
};

export default ShopSlugPage;
