import Image from "next/image";
import React from "react";
import Tiptap from "../general/Editor";

const SingleBlog = ({ data }) => {
  return (
    <div className="Single-Recipe pageLayout pb-10 md:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="image-area">
            <Image
              src={data?.imageUrl}
              alt={data?.name}
              width={600}
              height={600}
              className="w-full h-full"
            />
          </div>
          <div className="content-area GeneralSans ">
            <h4 className="subheading bg-[#F9F1F8] font-semibold py-2 px-12 rounded-full table mb-4">
              Recipe
            </h4>
            <h2 className="title uppercase text-4xl font-medium mb-4">
              {data.name}
            </h2>
            <p className="text-lg font-normal">
              <Tiptap content={data?.shortDescription} />
            </p>
          </div>
        </div>

        <div className="py-10">
          <Tiptap content={data?.description} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
