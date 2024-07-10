"use client";
import { deleteCookie } from "@/hooks/cookies";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBorderAll } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = ({ links }) => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("token");
    router.push("/shop");
  };

  return (
    <div className="Sidebar bg-[#FAF4FA] rounded-3xl overflow-hidden">
      <div className=" bg-[#FAF1DC] px-4 py-4 text-black GeneralSans">
        <h2>Dashboard</h2>
      </div>
      <ul className="py-6 px-4">
        {links.map((item, key) => (
          <li className="first:border-b-1 border-black">
            <Link href={item.links} className="">
              <div className="item-wrapper py-2 ">
                <div className="flex flex-row gap-3 items-center">
                  <div className="icon">{item.icon}</div>
                  <div className="content">
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
        <li className="first:border-b-1 border-black">
          <div onClick={handleLogout} className="item-wrapper py-2  ">
            <div className="flex justify-end cursor-pointer">
              <RiLogoutCircleLine size={30} color="red" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
