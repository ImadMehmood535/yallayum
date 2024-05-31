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
  const menuItems = [
    {
        name : "Shop",
        link : '/shop'
    },
    {
        name : "THINGS TO KNOW",
        link : '/blogs'
    },
    {
        name : "ABOUT US",
        link : '/about-us'
    },
    {
        name : "CONTACT US",
        link : '/contact-us'
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex justify-center items-center gap-3 custom-header"
    >
      <NavbarContent className="block sm:hidden" justify="start">
        <NavbarMenuToggle  className="text-white "
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex !justify-start gap-4 desktop-menu-item"
        justify="center"
      >
        {/* <NavbarBrand className="block md:hidden " >
          <p className="font-bold text-inherit">Yalla Yum</p>
        </NavbarBrand> */}
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
            width="18px" 
            radius="lg"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 bg-transparent",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              
              innerWrapper: "bg-transparent max-w-[100px]",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "bg-transparent",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Search"
            startContent={
              <CiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
