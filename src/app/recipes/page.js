import { getAllRecipes } from "@/cached-requests";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import RecipesList from "@/components/recipes/RecipesList";
 import React from "react";


export const metadata = {
  title: 'Recipes',
  description: 'This is a recipe page',
}
const Index = async () => {
  const {
    data: { recipes },
  } = await getAllRecipes();


  return (
    <div className="Recipes">
      <InnerpageHeader pagetitle="Recipes" />
      <div className="recipes-body pageLayout px-0 mx-auto">
        <RecipesList data={recipes} itemCount={9} />
      </div>
    </div>
  );
};

export default Index;
