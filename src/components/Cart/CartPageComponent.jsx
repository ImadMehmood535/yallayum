"use client";
import React, { useEffect, useState } from "react";
import CartComponent from "@/components/Cart/CartComponent";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import { API } from "@/api";

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
      {cartData && <CartComponent cartitem={cartData} getData={getData} />}
    </div>
  );
};

export default CartPageComponent;
