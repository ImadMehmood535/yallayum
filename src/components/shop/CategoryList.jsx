import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ itemCount, data, setFilter, setCategoryName , arabic }) => {
  const sortedData = [...data].sort((a, b) => {
    if (a.name === "All Products") return -1; // Prioritize "All Products"
    if (b.name === "All Products") return 1;
    if (a.customProduct === b.customProduct) return 0;
    return a.customProduct ? 1 : -1;
  });

  return (
    <div className="CategoryList px-0 mx-auto">
      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-${itemCount} gap-12`}>
          {sortedData.slice(0, itemCount).map((item, key) => (
            <div key={key} className="item-wrapper">
              <CategoryItem
                setFilter={setFilter}
                data={item}
                arabic={arabic}
                setCategoryName={setCategoryName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
