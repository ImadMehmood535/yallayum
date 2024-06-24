'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryItem = ({ data, setFilter }) => {

  const router = useRouter();

  const handleClick = () =>{

    if (data?.customProduct){
      router.push("/custom-product")
    } else {
      setFilter(data?.id)
      
    }

  }
  return (
    <div
      className="CategoryItem border border-black rounded-xl px-6 py-10"
      onClick={handleClick}
    >
      <div className="image-area flex justify-center mb-6">
        <Image
          src={data?.imageUrl}
          alt={data?.title}
          width={250}
          height={450}
          className="w-full max-w-[250px] rounded-xl"
        />
      </div>
      <div className="content-area text-center py-4 GeneralSans">
        <h2 className="text-2xl font-medium capitalize">{data.title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
