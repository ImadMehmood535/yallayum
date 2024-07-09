"use client";
import React, { useEffect, useState } from "react";
import RatingNoOfReview from "./RatingNoOfReview";
import { Button, Textarea } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { Logo } from "@/assets";
import TakeRating from "./TakeRating";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userReviewSchema } from "@/validations/ratings";
import { errorToast, successToast } from "@/hooks/useToast";
import { API } from "@/api";
import { getCookie } from "@/hooks/cookies";

const ProductReview = ({ id, data }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userReviewSchema) });

   const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await API.giveReview(id, formData);
      successToast(response?.data?.message);
      setShow(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);

      errorToast(error, "Can not submit review");
    }
  };

  useEffect(() => {
    setValue("stars", rating);
  }, [rating]);

  const authorized = getCookie("token");

  return (
    <div className="ProductReview pageLayout px-0 mx-auto">
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="review-header-area pb-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-between gap-4">
            <div className="review-overview">
              <h2 className="GeneralSans text-4xl font-medium">Reviews</h2>
              <h2 className="GeneralSans text-4xl font-medium my-4">
                {data?.averageRating}
              </h2>
              {show ? (
                <div className="rating-area ">
                  <TakeRating setRating={setRating} rating={rating} />
                  {errors?.stars && (
                    <p className="text-red-700 my-2">
                      {errors?.stars?.message}
                    </p>
                  )}
                </div>
              ) : (
                <div className="rating-area ">
                  <RatingNoOfReview
                    avgrating={data?.averageRating}
                    totalReview={data?.totalReviews}
                  />
                </div>
              )}
            </div>
            {authorized && (
              <div className="adreview-btn">
                <Button
                  onClick={() => setShow(!show)}
                  className="GeneralSans text-lg font-medium rounded-full bg-black py-7 px-5 text-gray-100 cursor-pointer"
                >
                  Write Review
                </Button>
              </div>
            )}
          </div>
          {show && (
            <div className="py-4 flex flex-col w-full gap-4">
              <p>Write your feedback about this product</p>
              <Textarea
                variant="bordered"
                placeholder="Write here"
                className="w-full"
                minRows={6}
                classNames={"GeneralSans"}
                {...register("userReview")}
              />
              {errors?.userReview && (
                <p className="text-red-700">{errors?.userReview?.message}</p>
              )}
            </div>
          )}
          {show && (
            <div className="flex justify-end">
              <Button
                type="submit"
                isLoading={loading}
                className="GeneralSans   text-lg font-medium rounded-full bg-black py-7 px-5 text-gray-100 cursor-pointer"
              >
                Submit
              </Button>
            </div>
          )}
        </form>
        {data?.reviews?.map((item, key) => (
          <div
            key={key}
            className="review border-t-1 grid grid-cols-1 md:grid-cols-5"
          >
            <div className="user-info md:border-r-1 py-4 px-0 md:p-10 pl-0">
              <div className="p-2 md:p-4 rounded-full w-[60px] md:w-[96px] h-[60px] md:h-[96px] bg-[#FAF1DC] flex justify-center items-center">
                <FaUser className="text-2xl md:text-4xl text-black" />
              </div>

              <div className="user-details mt-4 GeneralSans">
                <h2 className="text-lg font-medium">{item?.userName}</h2>
                {/* <h4 className="text-base font-normal">{item.userLocation}</h4> */}
              </div>
            </div>
            <div className="user-review col-span-4 py-4 px-0 md:p-10">
              <div className="star-data mb-2">
                <div className="flex flex-row justify-between items-center">
                  <RatingNoOfReview show={false} avgrating={item?.stars} />
                  <p className="GeneralSans text-lg font-normal">
                    {item?.date}
                  </p>
                </div>
              </div>
              <div className="user-comment">
                <p className="GeneralSans text-base font-medium">
                  {item.userReview}
                </p>
                <div className="comment-reply flex flex-row items-center mt-4 gap-4">
                  <div className="profile bg-black rounded-full p-2 w-[50px] md:w-[96px] h-[50px] md:h-[96px] flex justify-center items-center">
                    <Image
                      src={Logo}
                      alt={Logo}
                      width={50}
                      height={96}
                      className="rounded-full max-w-[50px] max-h-[50px]"
                    />
                  </div>
                  <div className="reply">
                    <p className="GeneralSans text-base font-medium">
                      {item?.adminReply}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReview;
