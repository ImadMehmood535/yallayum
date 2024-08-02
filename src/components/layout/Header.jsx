"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import CartSideBar from "../general/CartSideBar";
import { getCookie } from "@/hooks/cookies";
import { useRouter } from "next/navigation";
import CustomAutocomplete from "./SeacrhModal";

const Header = () => {
  const DeskTopMenuItem = [
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Things to know",
      subMenu: [
        {
          name: "Blogs",
          link: "/blogs",
        },
        {
          name: "Recipes",
          link: "/recipes",
        },
      ],
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
    {
      name: "Make Your Pack",
      link: "/custom-product",
    },
  ];
  const additionalMenuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Recipes",
      link: "/recipes",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
    {
      name: "Make Your Mix",
      link: "/custom-product",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  useEffect(() => {
    if (isMenuOpen) {
      window.scrollTo({
        top: 90,
        behavior: "smooth",
      });
    }
  }, [isMenuOpen]);

  const authorized = getCookie("token") ? true : false;

  return (
    <>
      <Navbar
        position="sticky"
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        isBlurred={true}
        onMenuOpenChange={setIsMenuOpen}
        className="flex justify-center items-center gap-3 custom-header"
      >
        <NavbarContent className="block sm:hidden" justify="start">
          <NavbarMenuToggle
            className="text-white h-[40px] w-[40px]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex   gap-4 desktop-menu-item uppercase !justify-between text-white text-base">
          {/* {DeskTopMenuItem.map((item, key) => (
            <NavbarItem key={key}>
              <Link
                href={item.link}
                className="GeneralSans text-sm font-medium"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))} */}
          {DeskTopMenuItem.map((item, key) => (
            <div
              key={key}
              className="relative py-6   "
              onMouseEnter={() => setDropdownIndex(key)}
              onMouseLeave={() => setDropdownIndex(null)}
            >
              <Link
                href={item.link}
                className="GeneralSans whitespace-nowrap text-sm font-medium text-white hover:text-[#fc4242] cursor-pointer"
              >
                {item.name}
              </Link>
              {item.subMenu && dropdownIndex === key && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg">
                  {item.subMenu.map((subItem, subKey) => (
                    <Link
                      key={subKey}
                      href={subItem.link}
                      className="GeneralSans  block px-4 py-3 text-sm font-medium text-black hover:text-[#fc4242] cursor-pointer"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </NavbarContent>

        <NavbarContent className="flex  desktop-menu items-center">
          <NavbarBrand className="flex justify-center py-2xxx">
            <Link href="/">
              <AcmeLogo className="table" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex items-center flex-row-reverse gap-4">
            <Link href="/ar" className="  cursor-pointer !text-[20px] ml-5 mb-2 text-[#FFF2F1] hover:text-[#FAF1DC]">عربي</Link>
            <LiaShoppingBagSolid
              className="text-white text-5xl md:text-[19px] cursor-pointer"
              onClick={handleCartClick}
            />

            {authorized ? (
              <Link href="/user">
                <LuUser2 className="text-white" />
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <LuUser2 className="text-white" />
                </Link>
              </>
            )}

            <CustomAutocomplete />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="mob-br">
          {additionalMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="GeneralSans w-full text-black hover:text-[#FC4242]"
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <CartSideBar isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
};

export default Header;
