"use client";
import React, { useEffect, useState } from "react";
import CartComponent from "@/components/Cart/CartComponent";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import { API } from "@/api";
import Link from "next/link";
import LinkButton from "../general/LinkButton";

const CartPageComponent = () => {
  const [cartData, setCartData] = useState(null);

  const getData = async () => {
    try {
      const response = await API.getCartData();
      setCartData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Cart">
      <InnerpageHeader pagetitle="Cart" />
      {cartData && cartData.length > 0 ? (
        <CartComponent cartitem={cartData} getData={getData} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <svg
            className="w-24 h-24 text-gray-400 mb-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some items to your cart to get started!</p>
          <LinkButton  text={"Browse Products"} href="/shop"/>
        </div>
      )}
    </div>
  );
};

export default CartPageComponent;