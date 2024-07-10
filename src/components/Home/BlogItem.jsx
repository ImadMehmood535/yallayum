import Link from "next/link";
import Image from "next/image";
import React from "react";

const BlogItem = ({ data }) => {
  return (
    <div className="blog-item w-full cursor-pointer group relative rounded-[20px] overflow-hidden min-h-[450px] sm:max-h-[550px]">
      <Link href={`/blog/${data?.slug}`} className="block relative h-full">
        <BackgroundImage src={data?.imageUrl} alt={data?.name} />
        <OverlayContent data={data} />
      </Link>
    </div>
  );
};

const BackgroundImage = ({ src, alt }) => {
  return (
    <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 z-10">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" quality={75} />
    </div>
  );
};

const OverlayContent = ({ data }) => {
  return (
    <div className="relative z-20 bg-black/30 flex flex-col justify-between h-full p-6 text-white">
      <div className="header-area">
        <h4 className="title text-xl font-normal GeneralSans">{data?.name}</h4>
      </div>
      <div className="footer-area">
        <h6 className="author text-lg font-medium GeneralSans">by Yallayum</h6>
        <p className="text-white text-sm GeneralSans">{data?.date}</p>
      </div>
    </div>
  );
};

export default BlogItem;
