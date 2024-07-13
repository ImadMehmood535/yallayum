"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTiktok } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { PaymentCards2 } from "@/assets";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { API } from "@/api";
import { errorToast, successToast } from "@/hooks/useToast";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const useful_links = [
    { name: "Privacy Policy", link: "/" },
    { name: "Return & Shipping Policy", link: "/" },
    { name: "Terms & Conditions", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Return & Shipping Policy", link: "/" },
  ];

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await API.newsLetter(data);
      successToast(response?.data?.message);
      reset();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not submit");
    }
  };

  return (
    <div
      className={`${isDarkMode ? `Footer-dark` : `Footer-light`} overflow-hidden relative py-10 md:pt-20 md:pb-10 px-0 mx-auto ${
        isDarkMode ? "bg-black text-white" : "bg-[#FAF7F4] text-black"
      }`}
    >
      <div className="container relative z-20">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="left-area w-full md:w-2/4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="useful-links">
                <h4 className="uppercase GeneralSans font-semibold text-lg mb-4">
                  USEFUL LINKS
                </h4>
                <ul className="flex flex-col gap-3 text-sm font-medium">
                  {useful_links.map((item, key) => (
                    <li key={key}>
                      <Link
                        href={item.link}
                        className="GeneralSans text-sm font-medium hover:text-[#fc4242]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="useful-links">
                <h4 className="uppercase GeneralSans font-semibold text-lg mb-4">
                  USEFUL LINKS
                </h4>
                <ul className="flex flex-col gap-3 text-sm font-medium">
                  {useful_links.map((item, key) => (
                    <li key={key}>
                      <Link
                        href={item.link}
                        className="GeneralSans text-sm font-medium hover:text-[#fc4242]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about-site col-span-2">
                <div className="max-w-[520px]">
                  <h4 className="uppercase GeneralSans font-semibold text-lg mb-4">
                    CONTACT INFORMATION
                  </h4>
                  <p className="mb-3 GeneralSans font-medium text-base">
                    Thank you for choosing YallaYum. Follow us on social media
                    to stay up to date on our latest products and promotions.
                  </p>
                  <div className="icon-list  list">
                    <ul className="flex flex-col gap-2 text-sm font-medium">
                      <li className="flex flex-row gap-1 items-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              d="M14.2366 13.1741C16.4023 10.8883 16.3649 7.27944 14.1248 5.03927C11.8468 2.76121 8.15327 2.76121 5.87521 5.03927C3.63504 7.27944 3.59778 10.8883 5.76343 13.1741C6.64803 11.7664 8.21475 10.8307 10 10.8307C11.7853 10.8307 13.352 11.7664 14.2366 13.1741ZM10 19.7706L4.6967 14.4674C1.76777 11.5384 1.76777 6.7897 4.6967 3.86076C7.62563 0.931829 12.3743 0.931829 15.3033 3.86076C18.2323 6.7897 18.2323 11.5384 15.3033 14.4674L10 19.7706ZM10 9.9974C8.61925 9.9974 7.5 8.87815 7.5 7.4974C7.5 6.11669 8.61925 4.9974 10 4.9974C11.3808 4.9974 12.5 6.11669 12.5 7.4974C12.5 8.87815 11.3808 9.9974 10 9.9974Z"
                              fill="currentColor"
                              fillOpacity="0.75"
                            />
                          </g>
                        </svg>
                        <Link
                          href={"/"}
                          className="GeneralSans text-sm font-medium hover:text-[#fc4242]"
                        >
                          86 Street, DIP 1, Dubai, UAE
                        </Link>
                      </li>
                      <li className="flex flex-row gap-1 items-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              d="M17.5 13.6833V16.6301C17.5 17.0676 17.1617 17.4306 16.7254 17.4614C16.3609 17.4872 16.0636 17.5 15.8333 17.5C8.4695 17.5 2.5 11.5305 2.5 4.16667C2.5 3.93642 2.51288 3.63906 2.53863 3.27458C2.56948 2.83823 2.93245 2.5 3.36988 2.5H6.31675C6.53065 2.5 6.7098 2.66202 6.73127 2.87483C6.75056 3.06589 6.76848 3.21928 6.78506 3.33502C6.95362 4.51227 7.29794 5.6328 7.79058 6.66919C7.86966 6.83554 7.81809 7.03466 7.66821 7.14172L5.86962 8.4265C6.9646 10.9843 9.01575 13.0354 11.5735 14.1304L12.8559 12.3349C12.9643 12.1832 13.1658 12.1311 13.3342 12.211C14.3705 12.7032 15.4909 13.0472 16.668 13.2153C16.783 13.2318 16.9354 13.2496 17.1252 13.2687C17.338 13.2902 17.5 13.4694 17.5 13.6833Z"
                              fill="currentColor"
                              fillOpacity="0.75"
                            />
                          </g>
                        </svg>
                        <Link
                          href={"/"}
                          className="GeneralSans text-sm font-medium hover:text-[#fc4242]"
                        >
                          Phone: (971) 527254899
                        </Link>
                      </li>
                      <li className="flex flex-row gap-1 items-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              d="M1.66667 4.58333V3.32783C1.66667 2.87063 2.04609 2.5 2.49317 2.5H17.5068C17.9633 2.5 18.3333 2.87079 18.3333 3.32783V16.6722C18.3333 17.1293 17.9539 17.5 17.5068 17.5H2.49317C2.03671 17.5 1.66667 17.1292 1.66667 16.6722V15.8333H16.6667V6.08333L10 12.0833L1.66667 4.58333ZM0 8.33333H4.16667V10H0V8.33333ZM0 12.5H6.66667V14.1667H0V12.5Z"
                              fill="currentColor"
                              fillOpacity="0.75"
                            />
                          </g>
                        </svg>
                        <Link
                          href={"/"}
                          className="GeneralSans text-sm font-medium hover:text-[#fc4242]"
                        >
                          Mail: info@yallayum.ae
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-area w-full md:w-1/4">
            <div className="newsletter">
              <h4 className="uppercase GeneralSans font-semibold text-lg mb-4">
                Newsletter
              </h4>
              <p className="mb-3 GeneralSans font-medium text-base">
                Join us on social media to get info, wellness tips & more.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field-wrapper mb-4">
                  <input
                    type="text"
                    className={`GeneralSans rounded-full py-3 px-6 focus:border-none focus:outline-none w-full ${
                      isDarkMode ? "bg-white text-black" : "bg-white text-black"
                    }`}
                    placeholder="Your email, please"
                    {...register("email", {
                      required: "Please enter an email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="error text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="button-wrapper GeneralSans flex gap-5 sm:gap-0 flex-col lg:flex-row items-center justify-start lg:justify-between">
                  <input
                    disabled={loading}
                    type="submit"
                    className={` rounded-full font-medium  max-w-[170px] w-full py-3 transition-all duration-200 cursor-pointer ${
                      isDarkMode ? "bg-[#fc4242] text-white hover:bg-white hover:text-black" : "bg-white text-black hover:bg-black hover:text-white"
                    }`}
                    value="Subscribe"
                  />
                  {/* <Link
                    href={"/"}
                    className="GeneralSans pb-1 underline text-[#9A9A9A] text-sm hover:text-[#fc4242]"
                  >
                    We respect your privacy.
                  </Link> */}
                </div>
              </form>
              <div className="social-list mt-5">
                <ul className="flex flex-row gap-2 justify-center md:justify-start">
                  <li
                    className={`p-3 rounded-full bg-white hover:bg-[#fc4242] text-[#fc4242] hover:text-white   transition-all duration-200 ${
                      isDarkMode ? `black` : `white`
                    }`}
                  >
                    <FaTiktok />
                  </li>
                  <li
                    className={`p-3 rounded-full bg-white hover:bg-[#fc4242] text-[#fc4242] hover:text-white   transition-all duration-200 ${
                      isDarkMode ? `black` : `white`
                    }`}
                  >
                    <PiInstagramLogo />
                  </li>
                  <li
                    className={`p-3 rounded-full bg-white hover:bg-[#fc4242] text-[#fc4242] hover:text-white   transition-all duration-200 ${
                      isDarkMode ? `black` : `white`
                    }`}
                  >
                    <RiFacebookFill />
                  </li>
                  <li
                    className={`p-3 rounded-full bg-white hover:bg-[#fc4242] text-[#fc4242] hover:text-[#ccc]   transition-all duration-200 ${
                      isDarkMode ? `black` : `white`
                    }`}
                  >
                    <FaLinkedinIn />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer w-full flex flex-col justify-between md:flex-row pt-10 md:pt-36 items-center">
          <div className="rights-text">
            <p className="GeneralSans flex flex-col md:flex-row gap-4 text-base">
              <span className="font-semibold">© 2024 YallaYum</span>
              <span>
                {" "}
                All Rights Reserved | Developed by{" "}
                <Link
                  href="https://www.clicktap.ae/"
                  target="_blank"
                  className="text-[#fc4242] font-bold"
                >
                  Clicktap Digital
                </Link>
              </span>
            </p>
          </div>
          <div className="payments flex flex-col-reverse md:flex-row gap-3 items-center justify-end">
            <div className="link-list">
              <ul className="flex  flex-row gap-3 text-sm font-medium">
                <li className="text-center">
                  <Link
                    href={"/"}
                    className="GeneralSans text-sm font-medium hover:text-[#fc4242]"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    href={"/"}
                    className="GeneralSans text-sm font-medium hover:text-[#fc4242]"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-list">
              <Image
                src={PaymentCards2}
                alt={PaymentCards2}
                className="max-w-[210px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
