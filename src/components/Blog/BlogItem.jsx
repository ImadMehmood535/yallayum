import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ data }) => {
  return (
    <div className="BlogItem">
      <Link href={`/blogs/${data?.slug}`}>
        <div className="image-area">
          <Image
            src={data?.imageUrl}
            alt={data?.name}
            width={550}
            height={450}
            className="w-full max-h-[350px] rounded-xl"
          />
        </div>
        <div className="content-area text-center py-4 GeneralSans">
          <h2 className="text-2xl font-medium uppercase">{data?.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;