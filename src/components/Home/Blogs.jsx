import React from "react";
 import Link from "next/link";
import BlogItem from "./BlogItem";

const Blogs = ({ blogsData }) => {
  return (
    <div className="Blogs py-10 md:py-20 md:pt-36 px-0 mx-auto">
      <div className="container">
        <div className=" !pb-24">
          <div className="heading-area text-center">
            <div className="w-full md:max-w-[760px] mx-auto">
              <h4 className="sub-heading text-[#B051AC] text-xl">
                sharing is caring
              </h4>
              <h2 className="text-5xl text-bold mb-4">Explore Our Articles</h2>
              <p className="text-[#3C3C3B]">
                Explore our latest articles and embark on a journey of culinary
                discovery, health insights, and Dubai's vibrant culture. Stay
                informed, inspired, and engaged by subscribing to our blog
                today.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {blogsData.map((blog, key) => (
              <BlogItem data={blog} />
            ))}
          </div>
        </div>
        <div className="!pt-10">
          <div className="btn-area flex justify-center">
            <Link href={"/"} className="cus-btn table text-center">
              Ream More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
