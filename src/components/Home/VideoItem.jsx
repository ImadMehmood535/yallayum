"use client";
import { video1 } from "@/assets";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const VideoItem = ({ videoData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative w-full ">
      <div className="p-2 rounded-[15px] ">
        <div className="rounded-[10px] overflow-hidden">
          <video
            ref={videoRef}
            width="320"
            height="420"
            preload="none"
            poster={videoData?.thumbnail?.src}
            controls={false}
            className=" z-20 w-full h-[420px] aspect-video object-cover object-center rounded-[15px] "
          >
            <source src={videoData?.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="w-12 h-12 rounded-full bg-white absolute top-6 right-6 z-30 flex justify-center items-center cursor-pointer"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
         
        </div>
      </div>

      <p className="GeneralSans font-medium">{videoData?.name}</p>
    </div>
  );
};

export default VideoItem;
