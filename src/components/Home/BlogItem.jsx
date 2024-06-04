import Image from "next/image";
import React from "react";

const BlogItem = ({ data }) => {
  return (
    <div className="BlogItem cursor-pointer group relative rounded-[20px] overflow-hidden min-h-[450px] md:max-h-[550px]   before:content-[''] before:w-full before:h-full before:absolute before:bg-red-500 before:top-0 before:left-0 before:-z-10 before:opacity-5">
      <div className="item-wrapper  z-20 h-full p-6">
        <div className="image-area absolute top-0 left-0 -z-10 w-full h-full">
          <Image
            src={data.image}
            alt={data.image}
            quality={100}
            // objectFit="cover"
            // layout="responsive"
            width={395}
            height={700}
            className=" h-full max-h-[550px]  transition-all  group-hover:scale-125  object-cover object-center"
          />
        </div>
        <div className="hidden group-hover:flex content-area  flex-col justify-between h-full text-white">
          <div className="header-area">
            <h4 className="title text-xl">{data.title}</h4>
          </div>
          <div className="footer-area">
            <h6 className="author text-lg">by {data.author}</h6>
            <p className="text-white text-base">{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
