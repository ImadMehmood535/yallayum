import Link from "next/link";
import React from "react";

const CategoryItem = ({ data }) => {
  return (
    <div className="CategoryItem border border-black rounded-xl p-6">
      <Link href={`/`}>
        <div className="image-area flex justify-center mb-6">
          <img
            src={data.iamge.src}
            alt={data.title}
            width={250}
            height={450}
            className="w-full max-w-[250px] rounded-xl"
          />
        </div>
        <div className="content-area text-center py-4 GeneralSans">
          <h2 className="text-2xl font-medium uppercase">{data.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
