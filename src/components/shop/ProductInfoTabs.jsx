import React, { useState } from "react";
import Tiptap from "../general/Editor";
// import Editor from "../general/Editor";

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
              className={`tab-link cursor-pointer ${
                activeTab === 1 ? "active" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              Descriptions
            </li>
            <li
              className={`tab-link cursor-pointer ${
                activeTab === 2 ? "active" : ""
              }`}
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
             <Tiptap content={data?.longDescription} />
           </div>

          <div
            className={`tab-content GeneralSans ${
              activeTab === 2 ? "active" : ""
            }`}
          >
            <div className="customTextCenter">
              <Tiptap content={data?.ingredients} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoTabs;
