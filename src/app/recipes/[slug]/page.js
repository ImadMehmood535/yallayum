import { getSingleReceipe } from "@/cached-requests";
import SingleRecipe from "@/components/recipes/SingleRecipe";
import React from "react";

export async function generateMetadata({ params }, parent) {
  const { data: data } = await getSingleReceipe(params.slug);

  return {
    title: data?.name,
    description: data?.shortDescription,
  };
}

const Page = async ({ params }) => {
  const { data: data } = await getSingleReceipe(params.slug);

  return (
    <div className="single-recipe">
      <SingleRecipe data={data} />
    </div>
  );
};

export default Page;
