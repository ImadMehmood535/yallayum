"use client";
import { options } from "@/data/cities";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CheckoutTotal = ({
  cartitem,
  onSubmit,
  loading,
  type,
  filterDeliveryPrice,
  setTotal,
  setPaymentMode,
  paymentMode

}) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (type === "general") {
      const amount = cartitem?.reduce(
        (total, item) => total + item?.price * item?.quantity,
        0
      );
      setTotal(amount);
      setSubtotal(amount);
    } else {
      setSubtotal(cartitem?.totalPrice);
    }
  }, [cartitem]);

  const cartData = type === "general" ? cartitem : cartitem?.customOrderItems;

  return (
    <div className="CheckoutTotal">
      <div
        id="summary"
        className="my-3 w-full px-4 py-4 shadow-lg rounded-xl GeneralSans"
      >
        <h1 className="font-semibold text-2xl border-b pb-8">
          {type === "general" ? "Your Order" : "Make your Mix"}
        </h1>

        {type === "general" ? (
          <>
            {cartData?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b-1 pb-5 my-5"
              >
                <h4 className="font-semibold text-sm uppercase text-[#FC4242]">
                  {item?.name}{" "}
                  <span className="text-xs font-medium text-black px-4">
                    ({item?.quantity} * ${item?.price})
                  </span>
                </h4>
                <h4 className="font-semibold text-sm">
                  ${(item?.quantity * item?.price).toFixed(2)}
                </h4>
              </div>
            ))}
          </>
        ) : (
          <>
            {" "}
            {cartData?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b-1 pb-5 my-5"
              >
                <h4 className="font-semibold text-sm uppercase text-[#FC4242]">
                  {item?.name}{" "}
                  <span className="text-xs font-medium text-black px-4">
                    ({item?.grams} grams)
                  </span>
                </h4>
                <h4 className="font-semibold text-sm">
                  ${((item?.grams / 10) * item?.price).toFixed(2)}
                </h4>
              </div>
            ))}
          </>
        )}

        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Shipping</span>
          <span className="font-semibold text-sm">
            {filterDeliveryPrice?.price}
          </span>
        </div>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>${(subtotal + filterDeliveryPrice?.price).toFixed(2)}</span>
          </div>

          {/* Payment mode tabs */}
          <div className="flex mb-4 gap-3">
            <div
              className={`flex-1 rounded-md py-2 px-4 text-center cursor-pointer ${
                paymentMode === "COD"
                  ? "bg-[#FC4242] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPaymentMode("COD")}
            >
              Cash on Delivery
            </div>
            <div
              className={`flex-1 py-2 px-4 rounded-md text-center cursor-pointer  ${
                paymentMode === "ONLINE"
                  ? "bg-[#FC4242] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPaymentMode("ONLINE")}
            >
              Pay Online
            </div>
          </div>

          <Button
            type="submit"
            isLoading={loading}
            onClick={onSubmit}
            className="bg-[#121212] py-3 px-6 rounded-full font-semibold hover:bg-[#FC4242] transition text-sm mb-3 text-white uppercase w-full border"
          >
            Checkout
          </Button>
          <button className="font-semibold transition text-sm text-[#121212] hover:text-[#FC4242] uppercase w-full">
            <Link href="/shop">Or continue shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTotal;
