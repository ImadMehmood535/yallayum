import React, { useEffect, useState } from "react";
import InputField from "../general/InputField";

const CheckoutForm = ({errors , register, options }) => {
  return (
    <div className="CheckoutForm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-2">
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
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-2">
        <InputField
          label="Your Email"
          type="email"
          placeholder="Enter your email"
          errors={errors}
          name="email"
          register={register}
        />
        <InputField
          label="Your Phone"
          type="tel"
          placeholder="Enter your phone number"
          errors={errors}
          name="phone"
          register={register}
        />
      </div>
      <div className="mt-2 h-full">
        <InputField
          label="Company Name"
          type="text"
          placeholder="Enter your company name "
          errors={errors}
          name="company"
          register={register}
        />
      </div>
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
      </div>
      <div className="mt-2 h-full select-wrapper">
        <InputField
          type="select"
          options={options}
          placeholder="Select Country"
          errors={errors}
          name="country"
          register={register}
        />
        <InputField
          type="text"
          placeholder="City"
          errors={errors}
          name="city"
          register={register}
        />
      </div>

      {/* <div className="py-3">
          <ButtonComponent type={"submit"} text="Submit" isActive={true} />
        </div> */}
    </div>
  );
};

export default CheckoutForm;
