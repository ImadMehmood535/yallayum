"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { successToast } from "@/hooks/useToast";
import { API } from "@/api";

const CartProductList = ({ cartitem, setTotal, getData }) => {
  const [products, setProducts] = useState(cartitem);
  const [loading, setLoading] = useState(null);

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts?.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, quantity: updatedProduct?.quantity }
          : product
      )
    );
  };

  const handleIncrement = async (productId) => {
    setLoading(true);
    try {
      const product = products?.find((product) => product?.id === productId);
      updateProduct({ id: productId, quantity: product?.quantity + 1 });
      await API.updateCartItem(productId, {
        quantity: product?.quantity + 1,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDecrement = async (productId) => {
    try {
      const product = products.find((product) => product?.id === productId);
      if (product.quantity > 1) {
        setLoading(true);

        updateProduct({ id: productId, quantity: product?.quantity - 1 });
        await API.updateCartItem(productId, {
          quantity: product?.quantity - 1,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    let totalPrice = 0;
    products?.forEach((item) => {
      totalPrice += item?.price * item?.quantity;
    });
    setTotal(totalPrice);
  }, [products, setTotal]);

  const handleRemove = async (id) => {
    setLoading(true);
    try {
      await API.removeItem(id);
      setProducts(products?.filter((item) => item?.id != id));
      setLoading(false);
      successToast("Successfully removed item from your cart");
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  return (
    <div className="CartDetails">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-full">
          <div className="flex mb-5 pb-5 border-b-1 GeneralSans">
            <h3 className="font-bold text-xl capitalize w-2/5 text-left">
              Products
            </h3>
            <h3 className="font-bold text-xl capitalize w-1/5 hidden sm:block text-center">
              Price
            </h3>
            <h3 className="font-bold text-xl capitalize w-1/5 hidden sm:block text-center">
              Quantity
            </h3>
            <h3 className="font-bold text-xl capitalize w-1/5 hidden sm:block text-center">
              Total Price
            </h3>
          </div>

          {products?.map((item, index) => (
            <div
              key={index}
              className={`${
                loading ? "opacity-30" : ""
              } hover:bg-gray-100 py-4 px-4 border-b-1 -mx-1  `}
            >
              <div className="flex flex-wrap GeneralSans flex-col sm:flex-row items-start sm:items-center">
                <div className="flex justify-start items-center w-full sm:w-2/5">
                  <Link href={`/shop/${item?.slug}`} className="w-36">
                    <Image
                      src={item?.imageUrl}
                      alt="Product Image"
                      width={100}
                      height={100}
                      className="min-h-[100px] w-[100px]"
                    />
                  </Link>
                  <div className="flex flex-col ml-4 flex-grow">
                    <span className="font-bold text-start  mb-3">
                      {item?.name}
                    </span>
                    <div
                      onClick={() => handleRemove(item?.id)}
                      className="text-red-700 text-tiny cursor-pointer"
                    >
                      Remove
                    </div>
                  </div>
                </div>

                <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                  <div className="block sm:hidden mr-2">
                    <b>Price</b>
                  </div>
                  <span className="text-center text-xl font-semibold  text-[#616161]">
                    <span className="price">${item?.price}</span>
                  </span>
                </div>

                <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                  <div className="flex items-center justify-center rounded-xl overflow-hidden">
                    <button
                      className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-gray-500"
                      onClick={() => handleDecrement(item?.id)}
                    >
                      −
                    </button>
                    <div className="flex h-8 w-11 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                      {item?.quantity}
                    </div>
                    <button
                      className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 bg-gray-300 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-gray-500"
                      onClick={() => handleIncrement(item?.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">
                  <div className="block sm:hidden mr-2">
                    <b>Total Price</b>
                  </div>
                  <h4 className="text-center font-bold text-base text-[#121212]">
                    <span className="price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap items-center justify-between mt-5">
            <Link
              href="/sale"
              className="flex GeneralSans font-semibold text-sm bg-[#121212] text-white py-3 px-6 rounded-full items-center gap-2"
            >
              Back To Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductList;
