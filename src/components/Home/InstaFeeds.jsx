import React from "react";
import { MdOutlineStar } from "react-icons/md";
import ReviewSlider from "../general/ReviewSlider";
import { videoData } from "@/data/videosData";
import VideoItem from "./VideoItem";
import VideoSlider from "./VideoSlider";

const InstaFeeds = ({ reviewData, arabic }) => {
  return (
    <div className="InstaFeeds  pageLayout px-0  mx-auto bg-[#FAF4FA]">
      <div className="container ">
        <div className="!pb-10">
          <div className="heading-area text-center">
            <div className="w-full md:max-w-[770px] mx-auto">
              <div className=" rounded-md pt-16 flex justify-center items-center mb-4">
                <div className="bg-white py-2 px-6 flex flex-col md:flex-row items-center gap-2 rounded-[8px] mb-3">
                  <ul className="flex">
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
                  <h4 className="sub-heading text-sm GeneralSans ">
                    {arabic ? (
                      <>
                        <b>أكثر من 100,000</b> عميل سعيد
                      </>
                    ) : (
                      <>
                        <b>Over 100,000</b> happy customers
                      </>
                    )}
                  </h4>
                </div>
              </div>

              {arabic ? (
                <h2 className="text-4xl kalamFont md:text-7xl text-bold uppercase font-bold ">
                  !لقد قامو بتجميد المذاااااق
                </h2>
              ) : (
                <h2 className="text-4xl kalamFont md:text-7xl text-bold uppercase font-bold ">
                  they did freeze the tasteeeeee!
                </h2>
              )}
            </div>
            <div className="w-full pt-8 ">
              <VideoSlider videoData={videoData} />
            </div>
          </div>
        </div>

        <div className=""></div>
        <div className="mb-0 md:-mb-[9%]">
          <ReviewSlider arabic={arabic} reviewData={reviewData} />
        </div>
      </div>
    </div>
  );
};

export default InstaFeeds;
