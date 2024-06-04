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

const Header = () => {
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
      link: "/blogs",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      isBlurred
      onMenuOpenChange={setIsMenuOpen}
      className="flex justify-center items-center gap-3 custom-header relative"
    >
      <NavbarContent className="block sm:hidden" justify="start">
        <NavbarMenuToggle
          className="text-white h-[40px] w-[40px]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex   gap-4 desktop-menu-item uppercase !justify-between text-white text-base">
        <NavbarItem>
          <Link href="/shop">Shop</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="/blogs">
            Things To Know
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="about-us">About Us</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact-us">Contact Us</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex  desktop-menu items-center">
        <NavbarBrand className="flex justify-center py-2xxx">
          <AcmeLogo className="table" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem className="flex items-center flex-row-reverse gap-2">
          <Link href="/cart">
            <LiaShoppingBagSolid className="text-white" />
          </Link>
          <Link href="/cart">
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
                "placeholder:text-[12px] ",
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
              className="w-full text-black hover:text-[#FC4242]"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
