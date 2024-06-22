"use client";
import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutTotal from "./CheckoutTotal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { single_product_image } from "@/assets";
import { checkoutSchema } from "@/validations/checkoutform";

const CheckoutComponent = () => {
  const options = [
    { id: 1, name: "Pakistan" },
    { id: 2, name: "Uae" },
    { id: 3, name: "Usa" },
  ];

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
      price: 50,
      quantity: 4,
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const onSubmit = async (data) => {
    const combinedData = { ...data, cart: cartitem };
    try {
      //   await API.sendOrder(combinedData);
      console.log("Order submitted:", combinedData);
      reset();
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="CheckoutComponent">
      <div className="AboutCompany pageLayout px-0 mx-auto">
        <div className="container">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row justify-between gap-16">
              <div className="w-full md:w-[65%]">
                <CheckoutForm
                  register={register}
                  errors={errors}
                  options={options}
                />
              </div>
              <div className="w-full md:w-[35%]">
                <CheckoutTotal
                  cartitem={cartitem}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
