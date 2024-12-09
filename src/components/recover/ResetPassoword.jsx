"use client";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { errorToast, successToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { setCookie } from "@/hooks/cookies";
import { API } from "@/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword } from "@/validations/login";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPassword) });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // setLoading(true);
    // try {
    //   const response = await API.forgetPassword(data);
    //   successToast(response?.data?.message);
    //   setLoading(false);
    //  } catch (error) {
    //   setLoading(false);
    //   errorToast(error, "Can not log In at the moment");
    // }
  };

  console.log(errors, "errors");

  return (
    <div className="h-[70vh] pageLayout px-0 mx-auto">
      <div className="container flex justify-center items-center h-full">
        <div className="max-w-[500px] mx-auto w-full">
          <h2 className="text-5xl Fedra-500  mb-10 text-center">
            Reset Password
          </h2>
          <div className="formarea GeneralSans">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field-wrapper">
                <div className="field-container relative border border-black rounded-lg py-3 px-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your new password"
                    {...register("password")}
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-800">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container relative border border-black rounded-lg py-3 px-5">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="confirm your new password"
                    {...register("newPassword")}
                  />
                  {errors?.newPassword && (
                    <p className="text-sm text-red-800">
                      {errors?.newPassword?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="field-container">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="w-[100%] h-[58px] text-base bg-zinc-950 text-white rounded-full uppercase"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
