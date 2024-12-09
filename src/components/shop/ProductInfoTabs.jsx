import React, { useState } from "react";
import Tiptap from "../general/TipTap";
import Image from "next/image";

const ProductInfoTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabID) => {
    setActiveTab(tabID);
  };

  const replaceIconCodesWithEmojis = (text) => {
    return text.replace(/\[`(U\+\w+)\`]/g, (match, p1) => {
      const codePoint = parseInt(p1.replace("U+", ""), 16);
      const emoji = String.fromCodePoint(codePoint);
      return `<span class="emoji">${emoji}</span>`;
    });
  };

  const processedDescription = replaceIconCodesWithEmojis(data.longDescription);
  const processedIntegrations = replaceIconCodesWithEmojis(data.ingredients);

  return (
    <div className="product-info-tabs w-full">
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

        <div className="content-wrapper w-full">
          <div
            className={`tab-content GeneralSans ${
              activeTab === 1 ? "active" : ""
            }`}
          >
            <Tiptap content={processedDescription} />
          </div>

          <div
            className={`tab-content GeneralSans ${
              activeTab === 2 ? "active" : ""
            }`}
          >
            <div className="mb-8 w-full">
              <Tiptap content={processedIntegrations} />
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-evenly w-full">
              {data?.ingredientsData?.map((item, index) => (
                <div
                  className="flex flex-col items-center text-center"
                  key={index}
                >
                  <div className="mb-4">
                    <Image
                      src={item?.imageUrl}
                      alt={item?.name}
                      quality={100}
                      className="w-12 h-12 object-contain"
                      height={64}
                      width={64}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item?.head}</h3>
                  <p className="text-sm text-gray-600">{item?.paragh}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoTabs;