"use client";
import Link from "next/link";
import React from "react";

const CartTotal = ({ total }) => {
  return (
    <div className="CartTotal">
      <div
        id="summary"
        className="my-3 w-full px-4 py-4 shadow-lg rounded-xl GeneralSans"
      >
        <h1 className="font-semibold text-2xl border-b pb-8 ">Order Summary</h1>
        {/* <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Shipping</span>
          <span className="font-semibold text-sm">Free</span>
        </div> */}

        <div className="  mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            href={`/checkout?type=general`}
            className="bg-[#121212] table w-full text-center py-3 px-6 rounded-full font-semibold hover:bg-[#FC4242] transition text-sm mb-3 text-white uppercase   border"
          >
            Checkout
          </Link>
          <button className="font-semibold transition text-sm text-[#121212] hover:text-[#FC4242] uppercase w-full">
            <Link href={"/shop"}>Or continue shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
