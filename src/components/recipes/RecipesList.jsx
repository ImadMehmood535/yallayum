import React from "react";
import RecipesItem from "./RecipesItem";
import Link from "next/link";


const RecipesList = ({ data, itemCount, btntext, btnlink, title }) => {
  
  return (
    <div className="RecipesList">
      <div className="container">
        {(title || btntext) && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-between gap-4 mb-6">
            <div className="review-overview">
              <h2 className="GeneralSans text-4xl font-medium">{title}</h2>
              
            </div>
            <div className="adreview-btn">
              <Link
                href={btnlink}
                className="GeneralSans text-lg font-semibold rounded-full bg-black py-4 px-12 text-gray-100 cursor-pointer table"
              >
                {btntext}
              </Link>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.slice(0, itemCount).map((item, key) => (
            <div key={key} className="item-wrapper">
              <RecipesItem data={item} />
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesList;
