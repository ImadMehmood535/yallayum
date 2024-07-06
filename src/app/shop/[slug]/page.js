import { getProductById } from "@/cached-requests";
import ShopSlugPage from "@/components/shop/ShopSlugPage";
import React from "react";

const Page = async ({ params }) => {
  const { data: product } = await getProductById(params.slug);
  // console.log(product , "product")

  return <ShopSlugPage product={product} />;
};

export default Page;
