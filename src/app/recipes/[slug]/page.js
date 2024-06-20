"use client";
import SingleRecipe from "@/components/recipes/SingleRecipe";
import { recipesData } from "@/data/recipesData";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = ({ params }) => {
  const recipe = recipesData.find((recipe) => recipe.slug === params.slug);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="single-recipe">
      <SingleRecipe data={recipe} />
    </div>
  );
};

export default Page;
