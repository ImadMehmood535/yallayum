import React from "react";
import { MdOutlineStar } from "react-icons/md";
import ReviewSlider from "../general/ReviewSlider";
 
const InstaFeeds = ({ reviewData }) => {
  return (
    <div className="InstaFeeds py-10 md:py-20 px-0  mx-auto bg-[#FAF4FA]">
      <div className="container">
        <div className="  !pb-10">
          <div className="heading-area text-center">
            <div className="w-full md:max-w-[770px] mx-auto">
              <div className=" rounded-md  flex justify-center items-center mb-4">
                <div className="bg-white py-2 px-6 flex items-center gap-2 rounded-md">
                  <ul className="flex gap-1">
                    <li>
                      <MdOutlineStar />
                    </li>
                    <li>
                      <MdOutlineStar />
                    </li>
                    <li>
                      <MdOutlineStar />
                    </li>
                    <li>
                      <MdOutlineStar />
                    </li>
                    <li>
                      <MdOutlineStar />
                    </li>
                  </ul>
                  <h4 className="sub-heading text-sm ">
                    <b>Over 100,000</b> happy customers
                  </h4>
                </div>
              </div>
              <h2 className="text-4xl md:text-7xl text-bold uppercase font-bold ">
                they did freeze the tasteeeeee!
              </h2>
            </div>
          </div>
        </div>

        <div className=""></div>
        <div className="-mb-[9%]">
          <ReviewSlider reviewData={reviewData} />
        </div>
      </div>
    </div>
  );
};

export default InstaFeeds;
