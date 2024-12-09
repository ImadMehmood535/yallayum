"use client";
import React, { useState } from "react";
import CartProductList from "./CartProductList";
import CartTotal from "./CartTotal";

const CartComponent = ({ cartitem, getData }) => {
  const [total, setTotal] = useState(0);

  return (
    <div className="CartComponent">
      <div className="AboutCompany pageLayout px-0 mx-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-16">
            <div className="w-full md:w-[65%] ">
              <CartProductList
                getData={getData}
                cartitem={cartitem}
                setTotal={setTotal}
              />
            </div>
            <div className="w-full md:w-[35%]">
              <CartTotal total={total} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
