import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipesItem = ({ data }) => {
  return (
    <div className="RecipesItem">
      <Link href={`/recipes/${data.slug}`}>
        <div className="image-area">
          <Image
            src={data.image}
            alt={data.title}
            width={550}
            height={450}
            className="w-full max-h-[350px] rounded-xl"
          />
        </div>
        <div className="content-area text-center py-4 GeneralSans">
          <h2 className="text-2xl font-medium uppercase">{data.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default RecipesItem;
