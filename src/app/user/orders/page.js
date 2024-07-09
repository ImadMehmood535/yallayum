"use client";
import { API } from "@/api";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await API.getMyOrders();
      setData(response?.data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="GeneralSans max-w-4xl mx-auto  ">
      {data?.map((item, index) => (
        <div
          key={item?.id}
          className="bg-white rounded-3xl shadow-2xl mb-8 overflow-hidden transform transition-all"
        >
          <div
            className="bg-gradient-to-r from-[#E9DDEB] to-[#FFF5F5] px-6 py-4 flex flex-col md:flex-row items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-2xl font-bold text-black">
              Order #{item?.name}
            </h2>
            <div className="flex items-center">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mr-4 ${
                  item?.orderStatus === "PENDING"
                    ? "bg-[#FC4242] text-white"
                    : "bg-green-400 text-green-900"
                }`}
              >
                {item?.orderStatus}
              </span>
              <svg
                className={`w-6 h-6 transition-transform ${
                  openAccordion === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {openAccordion === index && (
            <div className="p-6">
              {item?.orderItems?.map((product, productIndex) => (
                <div
                  key={`${product.id}-${productIndex}`}
                  className="flex flex-col md:flex-row items-center gap-6 py-6 border-b border-gray-200 last:border-none"
                >
                  <div className="md:w-1/3">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {product?.name}
                    </h3>
                    <div className="flex flex-wrap justify-between text-sm text-gray-600">
                      <span className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                        Weight: {product?.weight}g
                      </span>
                      <span className="bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2">
                        Quantity: {product?.quantity}
                      </span>
                      <span className="bg-gray-100 rounded-full px-3 py-1 mb-2">
                        Price: ${product?.price?.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xl font-bold text-black">
                        Subtotal: ${product?.subTotal?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-gray-50 mt-4 px-6 py-4 flex justify-between items-center rounded-lg">
                <span className="text-lg font-semibold text-gray-700">
                  Total Items: {item?.totalItems}
                </span>
                <span className="text-3xl font-bold text-black">
                  {item?.totalPrice}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
