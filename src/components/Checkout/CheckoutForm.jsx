import React, { useEffect, useState } from "react";
import InputField from "../general/InputField";
import { Select, SelectItem } from "@nextui-org/react";

const CheckoutForm = ({ errors, register, options }) => {
  return (
    <div className="CheckoutForm GeneralSans">
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-2">
        <InputField
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          errors={errors}
          name="fname"
          register={register}
        />
        <InputField
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          errors={errors}
          name="lname"
          register={register}
        />
      </div> */}
      <div className="grid grid-cols-1 gap-4  ">
        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter your first name"
          errors={errors}
          name="name"
          register={register}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <InputField
          label="Your Email"
          type="email"
          placeholder="Enter your email"
          errors={errors}
          name="email"
          register={register}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <InputField
          label="Your Phone"
          type="tel"
          placeholder="Enter your phone number"
          errors={errors}
          name="phone"
          register={register}
        />
      </div>
      {/* <div className="mt-2 h-full">
        <InputField
          label="Company Name"
          type="text"
          placeholder="Enter your company name "
          errors={errors}
          name="company"
          register={register}
        />
      </div> */}
      <div className="mt-2 h-full">
        <h4>Address</h4>
        <InputField
          type="text"
          placeholder="Street Address"
          errors={errors}
          name="street"
          register={register}
        />
        <InputField
          type="text"
          placeholder="appartment, suite, unit etc"
          errors={errors}
          name="appartment"
          register={register}
        />
        <div className="mt-2 w-full h-full select-wrapper relative">
          <select
            name="country"
            className="select-box w-full py-4 px-4 pr-12 rounded-full custom-input-design border-1 border-[#EBEBEB] hover:border-[#3F7FAE] appearance-none"
            {...register("country")}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {errors && errors?.country && (
            <p className="text-tiny text-danger pl-2 mt-1">
              {errors?.country.message}
            </p>
          )}
        </div>
      </div>

      {/* <div className="py-3">
          <ButtonComponent type={"submit"} text="Submit" isActive={true} />
        </div> */}
    </div>
  );
};

export default CheckoutForm;
