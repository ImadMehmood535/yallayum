import React from "react";
import RatingNoOfReview from "./RatingNoOfReview";
import { Button } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { Logo } from "@/assets";

const ProductReview = ({ data }) => {
  return (
    <div className="ProductReview pageLayout px-0 mx-auto">
      <div className="container">
        <div className="review-header-area pb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-between gap-4">
            <div className="review-overview">
              <h2 className="GeneralSans text-4xl font-medium">Reviews</h2>
              <h2 className="GeneralSans text-4xl font-medium my-4">
                {data.avgrating}
              </h2>
              <div className="rating-area ">
                <RatingNoOfReview
                  avgrating={data.avgrating}
                  totalReview={data.numOfReview}
                />
              </div>
            </div>
            <div className="adreview-btn">
              <Button className="GeneralSans text-lg font-semibold rounded-full bg-black py-7 px-5 text-gray-100 cursor-pointer">
                Write Review
              </Button>
            </div>
          </div>
        </div>
        {data.reviews.map((item, key) => (
          <div key={key} className="review border-t-1 grid grid-cols-1 md:grid-cols-5">
            <div className="user-info md:border-r-1 py-4 px-0 md:p-10 pl-0">
              {item.userProfile ? (
                <img
                  src={item.userProfile.src}
                  alt={item.userProfile}
                  width={96}
                  height={96}
                  className="rounded-full max-w-[60px] md:max-w-[96px] max-h-[60px] md:max-h-[96px]"
                />
              ) : (
                <div className="p-2 md:p-4 rounded-full w-[60px] md:w-[96px] h-[60px] md:h-[96px] bg-[#FAF1DC] flex justify-center items-center">
                  <FaUser className="text-2xl md:text-4xl text-black" />
                </div>
              )}
              <div className="user-details mt-4 GeneralSans">
                <h2 className="text-lg font-medium">{item.userName}</h2>
                <h4 className="text-base font-normal">{item.userLocation}</h4>
              </div>
            </div>
            <div className="user-review col-span-4 py-4 px-0 md:p-10">
              <div className="star-data mb-2">
                <div className="flex flex-row justify-between items-center">
                  <RatingNoOfReview avgrating={item.numOfStar} />
                  <p className="GeneralSans text-lg font-normal">{item.date}</p>
                </div>
              </div>
              <div className="user-comment">
                <p className="GeneralSans text-base font-medium">
                  {item.comment}
                </p>
                <div className="comment-reply flex flex-row items-center mt-4 gap-4">
                  <div className="profile bg-black rounded-full p-2 w-[50px] md:w-[96px] h-[50px] md:h-[96px] flex justify-center items-center">
                    <img
                      src={Logo.src}
                      alt={Logo}
                      width={50}
                      height={96}
                      className="rounded-full max-w-[50px] max-h-[50px]"
                    />
                  </div>
                  <div className="reply">
                    <p className="GeneralSans text-base font-medium">
                      {item.reply}
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
