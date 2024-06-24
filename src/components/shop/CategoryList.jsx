import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ itemCount, data, setFilter }) => {
  return (
    <div className="CategoryList px-0 mx-auto">
      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-${itemCount} gap-12`}>
          {data.slice(0, itemCount).map((item, key) => (
            <div key={key} className="item-wrapper">
              <CategoryItem setFilter={setFilter} data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
