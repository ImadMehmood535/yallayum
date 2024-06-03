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
      className={`group  w-fit
        transition-all  text-[14px] hover:px-12 font-semibold  rounded-full text-center flex justify-center items-center    bg-black h-10 px-6   text-gray-100 hover:text-white cursor-pointer whitespace-nowrap ${
          active ? "buttonShadow" : ""
        }   `}
    >
      <p>{text}</p>
    </Link>
  );
};

export default LinkButton;
