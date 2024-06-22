import { single_product_image } from "@/assets";
import CartComponent from "@/components/Cart/CartComponent";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import React from "react";

const Index = () => {
  const cartitem = [
    {
      id: 1,
      name: "test",
      imageUrl: single_product_image,
      price: 25,
      quantity: 1,
    },
    {
      id: 2,
      name: "test",
      imageUrl: single_product_image,
      price: 25,
      quantity: 1,
    },
  ];
  return (
    <div className="Cart">
      <InnerpageHeader pagetitle="Cart" />
      <CartComponent cartitem={cartitem} />
    </div>
  );
};

export default Index;
