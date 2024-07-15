"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { API } from "@/api";

const CartSideBar = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState(null);
  const [total , setTotal] = useState(0)

  const getData = async () => {
    try {
      const response = await API.getCartData();
      setCartItems(response?.data?.data);

      let totalPrice = 0;
      response?.data?.data?.forEach((item) => {
        totalPrice += item?.price * item?.quantity;
      });
      setTotal(totalPrice);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[999] transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div
              className={`pointer-events-auto w-screen max-w-md transform transition-transform duration-500 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900 GeneralSans">
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={onClose}
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems?.map((item) => (
                          <li key={item?.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Image
                                src={item?.imageUrl}
                                alt={item?.name}
                                width={100}
                                height={100}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3 className="GeneralSans text-xl">
                                    <Link href={`/shop/${item?.slug}`}>
                                      {item?.name}
                                    </Link>
                                  </h3>
                                  <p className="ml-4 sale-price text-[#FC4242] text-lg font-semibold">
                                    AED {item?.price?.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Qty {item?.quantity}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>AED {total}</p>
                  </div>
                  <p className="mt-0.5 text-base md:text-lg font-medium">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/cart"
                      className="flex GeneralSans  items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm bg-black"
                    >
                      Cart
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="font-medium text-[#FC4242]"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartSideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartSideBar;
