import React from "react";
import LinkButton from "../general/LinkButton";

const Failed = () => {
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
              color: ["red", "orange", "yellow", "gray"][
                Math.floor(Math.random() * 4)
              ],
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            ✖
          </div>
        ))}
      </div>

      <div className="bg-[#FFE9E9] GeneralSans p-8 rounded-lg shadow-lg max-w-md w-full text-center relative z-10">
        <h1 className="text-4xl font-bold mb-2 text-red-600">Payment Failed</h1>

        <p className="mb-4 text-sm">
          We're sorry, but there was an error processing your payment. Please
          check your card details and try again. If the problem persists, please
          contact your bank or our customer support.
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Common reasons for failure
          </h2>
          {/* <ul className="text-sm text-left list-disc list-inside">
            <li>Insufficient funds</li>
            <li>Incorrect card information</li>
            <li>Expired card</li>
            <li>Transaction limit exceeded</li>
          </ul> */}
        </div>

        <div className="flex justify-center items-center space-x-4">
          {/* <LinkButton text={"Try Again"} href="/checkout" /> */}
          <LinkButton text={"Contact Support"} href="/contact-us" />
        </div>
      </div>
    </div>
  );
};

export default Failed;
