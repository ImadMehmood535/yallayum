"use client";
import { Textarea } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import InputField from "../general/InputField";
import { Controller, useForm } from "react-hook-form";
import { contactSchema } from "@/validations/contactUs";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonComponent from "../general/ButtonComponent";

const ContactFormComponent = () => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await API.sendContactQuery(data);
      successToast(
        "We have received your query! Someone will get in touch with you soon."
      );
      reset();
      setValue("name", "");
      setValue("email", "");
      setValue("subject", "");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not submit your query! Try again letter");
      console.log(error);
    }
  };
  return (
    <div className="ContactFormComponent GeneralSans">
      <form
        className="w-full max-w-[900px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
          <InputField
            label="Your Name"
            type="text"
            placeholder="Enter your name"
            errors={errors}
            name="name"
            register={register}
          />
          <InputField
            label="Your Email"
            type="email"
            placeholder="Enter your email"
            errors={errors}
            name="email"
            register={register}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
          <InputField
            label="Your Phone"
            type="tel"
            placeholder="Enter your phone number"
            errors={errors}
            name="phone"
            register={register}
          />
          <InputField
            label="Your Subject"
            type="text"
            placeholder="Enter Your subject"
            errors={errors}
            name="subject"
            register={register}
          />
        </div>

        <div className="h-full">
          <label className="text-[#8F8F8F] text-sm font-medium  px-1 capitalize">
            Message
          </label>

          <div className="mt-2 h-full">
            <Textarea
              placeholder="Enter your message"
              className="w-full"
              variant="bordered"
              minRows={7}
              classNames={{
                inputWrapper: [
                  "bordered",
                  "border-1",
                  "border-[#EBEBEB]",
                  "hover:border-[#3F7FAE]",
                  "py-6",
                  "py-6",
                  "custom-input-design",
                ],
              }}
              {...register("message")}
            />

            {errors && errors?.message && (
              <p className="text-tiny text-danger pl-3 mt-1">
                {errors?.message?.message}
              </p>
            )}
          </div>
        </div>

        <div className="py-3">
          <ButtonComponent type={"submit"} text="Submit" isActive={true} />
        </div>
      </form>
    </div>
  );
};

export default ContactFormComponent;
