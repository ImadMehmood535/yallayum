import React from "react";

const SingleRecipe = ({ data }) => {
  console.log(data);
  return (
    <div className="Single-Recipe pageLayout pb-10 md:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="image-area">
            <img src={data.image.src} alt={data.slud} width={100} height={100} className="w-full h-full"/>
          </div>
          <div className="content-area GeneralSans ">
            <h4 className="subheading bg-[#F9F1F8] font-semibold py-2 px-12 rounded-full table mb-4">Recipe</h4>
            <h2 className="title uppercase text-4xl font-medium mb-4">{data.title}</h2>
            <p className="text-lg font-normal">{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
