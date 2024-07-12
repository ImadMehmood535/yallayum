"use client";
import React, { useEffect, useState } from "react";
import LinkButton from "../general/LinkButton";
import { deleteCookie, getCookie } from "@/hooks/cookies";
import { API } from "@/api";

const ThankYou = () => {
  const getData = async (id) => {
    try {
      await API.statusOrder({
        key: id,
      });

      deleteCookie("invoiceId");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData(getCookie("invoiceId"));
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: ["red", "blue", "purple", "pink"][
                Math.floor(Math.random() * 4)
              ],
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            ★
          </div>
        ))}
      </div>

      <div className="bg-[#FFE9E9] GeneralSans p-8 rounded-lg shadow-lg max-w-md w-full text-center relative z-10">
        <h1 className="text-4xl font-bold mb-2">Thank you!</h1>

        <p className="mb-4 text-sm">
          Your order has been placed successfully. We appreciate your choice and
          will send a confirmation email shortly. If you need any assistance,
          please contact us.
        </p>
        <p className="mb-4">Enjoy your meal!</p>

        <div className="flex justify-center items-center">
          <LinkButton text={"Return to Website"} href="/" />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
