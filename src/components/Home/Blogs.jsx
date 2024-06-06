import React from "react";
import BlogItem from "./BlogItem";
import LinkButton from "../general/LinkButton";

const Blogs = ({ blogsData }) => {
  return (
    <div className="Blogs  pageLayout md:mt-28 px-0 mx-auto">
      <div className="container">
        <div className=" !pb-24">
          <div className="heading-area text-center">
            <div className="w-full md:max-w-[760px] mx-auto">
              <h4 className="kalamFont uppercase sub-heading text-[#B051AC] text-xl">
                sharing is caring
              </h4>
              <h2 className="text-5xl GeneralSans font-medium mb-7 ">Explore Our Articles</h2>
              <p className="text-[#3C3C3B] GeneralSans  font-regular">
                Explore our latest articles and embark on a journey of culinary
                discovery, health insights, and Dubai&apos;s vibrant culture. Stay
                informed, inspired, and engaged by subscribing to our blog
                today.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {blogsData.map((blog, index) => (
              <BlogItem data={blog} key={index} />
            ))}
          </div>
        </div>
        <div className="!pt-10">
          <div className="btn-area flex justify-center">
            <LinkButton text={"Read More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
