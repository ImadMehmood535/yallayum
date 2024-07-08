import {
  getAllRecipes,
  getProductById,
  getSingleProductReview,
} from "@/cached-requests";
import ShopSlugPage from "@/components/shop/ShopSlugPage";
import React from "react";

const Page = async ({ params }) => {
  const { data: product } = await getProductById(params.slug);
  const { data: reviewData } = await getSingleProductReview(product?.id);
  const {
    data: { recipes },
  } = await getAllRecipes();
 
  return (
    <ShopSlugPage product={product} reviewData={reviewData} recipes={recipes} />
  );
};

export default Page;
