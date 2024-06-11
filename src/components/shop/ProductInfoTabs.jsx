import React, { useState } from "react";

const ProductInfoTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabID) => {
    setActiveTab(tabID);
  };

  return (
    <div className="product-info-tabs">
      <div className="wrapper">
        <div className="tab-wrapper mb-4">
          <ul className="tabs flex justify-start GeneralSans font-bold gap-5">
            <li
              className={`tab-link cursor-pointer ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Descriptions
            </li>
            <li
              className={`tab-link cursor-pointer ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Ingredients
            </li>
          </ul>
        </div>

        <div className="content-wrapper">
          <div
            className={`tab-content GeneralSans ${
              activeTab === 1 ? "active" : ""
            }`}
          >
            {data.longDescription}
          </div>

          <div className={`tab-content GeneralSans ${activeTab === 2 ? "active" : ""}`}>
            {data.ingredients}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoTabs;
