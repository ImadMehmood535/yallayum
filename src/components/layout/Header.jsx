"use client";
import React, { useState } from "react";
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

const Header = () => {
  const DeskTopMenuItem = [
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Things to know",
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
      name: "Things to know",
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
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
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
          {DeskTopMenuItem.map((item, key) => (
            <NavbarItem key={key}>
              <Link
                href={item.link}
                className="GeneralSans text-sm font-medium"
              >
                {item.name}
              </Link>
            </NavbarItem>
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
            <LiaShoppingBagSolid
              className="text-white text-5xl md:text-2xl cursor-pointer"
              onClick={handleCartClick}
            />
            <Link href="/login">
              <LuUser2 className="text-white" />
            </Link>

            <Input
              isClearable
              radius="lg"
              classNames={{
                input: [
                  "bg-transparent",
                  "text-black/90 bg-transparent",
                  "placeholder:text-white ",
                  "placeholder:text-[12px]",
                  "GeneralSans text-sm font-medium",
                ],

                innerWrapper: "bg-transparent max-w-[100px]",
                inputWrapper: [
                  "bg-transparent",
                  "backdrop-blur-xl",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                  "hidden",
                  "md:block",
                  "group-data-[focus=true]:w-[250px] transition-all",
                ],
              }}
              placeholder="SEARCH"
              startContent={
                <CiSearch className=" text-white w-8 h-8  hover:text-black " />
              }
            />
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
