import React from "react";

const BlogItem = ({ data }) => {
  return (
    <div className="BlogItem w-full cursor-pointer group relative rounded-[20px] overflow-hidden min-h-[450px] sm:max-h-[550px] before:content-[''] before:w-full before:h-full before:absolute before:bg-red-500 before:top-0 before:left-0 before:-z-10 before:opacity-5">
      <div className="item-wrapper z-20 h-full p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          style={{ backgroundImage: `url(${data.image.src})` }}
        ></div>
        <div className="relative z-10 hidden group-hover:flex content-area flex-col justify-between h-full text-white">
          <div className="header-area">
            <h4 className="title text-xl font-normal GeneralSans">
              {data.title}
            </h4>
          </div>
          <div className="footer-area">
            <h6 className="author text-lg font-medium GeneralSans">
              by {data.author}
            </h6>
            <p className="text-white text-sm GeneralSans">{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
