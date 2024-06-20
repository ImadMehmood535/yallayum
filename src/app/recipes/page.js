import InnerpageHeader from "@/components/general/InnerpageHeader";
import RecipesList from "@/components/recipes/RecipesList";
import { recipesData } from "@/data/recipesData";
import React from "react";

const Index = () => {
  return (
    <div className="Recipes">
      <InnerpageHeader pagetitle="Recipes" />
      <div className="recipes-body pageLayout px-0 mx-auto">
        <RecipesList data={recipesData} itemCount={9} />
      </div>
    </div>
  );
};

export default Index;
