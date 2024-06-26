"use client";

import { ShoppingBag } from "@/data/allSvgs";
import Link from "next/link";
import React, { useState } from "react";

const LinkButton = ({ text, href = "/" }) => {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`group GeneralSans  w-fit
        transition-all  text-[16px] hover:px-12 font-medium  rounded-full text-center flex justify-center items-center    bg-black h-12 px-8   text-gray-100 hover:text-white cursor-pointer whitespace-nowrap ${
          active ? "buttonShadow" : ""
        }   `}
    >
      <p>{text}</p>
    </Link>
  );
};

export default LinkButton;
