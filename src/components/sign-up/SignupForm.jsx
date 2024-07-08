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

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await API.registerUser(data);
      successToast("You can continue shopping now");
      setLoading(false);
      setCookie("token", response?.data?.data?.token);

      router.push("/");
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not sign up at the moment");
    }
  };

  const [isShow, setIsShow] = useState(false);

  const handleShow = (isShow) => {
    setIsShow(!isShow);
  };
  return (
    <div className="signup-from pageLayout px-0 mx-auto">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <h2 className="text-5xl Fedra-500  mb-10 text-center">
            Sign up
          </h2>
          <div className="formarea GeneralSans">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field-wrapper">
                <div className="field-container relative border border-black rounded-lg py-3 px-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    {...register("name", { required: true })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-800">
                      Full name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container relative border border-black rounded-lg py-3 px-5">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-800">Email is required</p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container relative border border-black rounded-lg py-3 px-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="phone"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-800">
                      Phone number is required
                    </p>
                  )}
                </div>
              </div>
              <div className="field-wrapper">
                <div className="field-container  border border-black rounded-lg py-3 px-5 relative">
                  <input
                    type={isShow ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center  leading-5 text-3xl">
                    {isShow ? (
                      <FaEye
                        onClick={() => handleShow(isShow)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => handleShow(isShow)}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  {errors?.password && (
                    <p className="text-sm text-red-800">Password is required</p>
                  )}
                </div>
              </div>

              <div className="field-container">
                <Button
                  type="submit"
                  isLoading={loading}
                  className="w-[100%] h-[58px] text-base bg-zinc-950 text-white rounded-full uppercase"
                >
                  Create account
                </Button>
              </div>
              <div className="field-wrapper">
                <div className="flex justify-center gap-2">
                  <label className="block text-[#A0A0A0] font-normal mt-4 ">
                    <span className="py-2 text-sm  leading-snug  ">
                      {" "}
                      Already have an account?{" "}
                    </span>
                  </label>
                  <label className="block text-gray-500  mt-4">
                    <Link
                      href="/login"
                      className="cursor-pointer tracking-tighter text-[#FC4242]   hover:text-[#000]"
                    >
                      Login
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
