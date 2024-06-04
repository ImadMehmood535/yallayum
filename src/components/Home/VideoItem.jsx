"use client";
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
    <div className="relative w-full">
      <video
        ref={videoRef}
        width="320"
        height="420"
        preload="none"
        controls={false}
        className="max-w-[250px] z-20 w-full h-[420px] object-cover object-center rounded-[15px] border-5 border-white"
      >
        <source src={videoData?.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="w-12 h-12 rounded-full bg-white absolute top-4 right-5 z-30 flex justify-center items-center cursor-pointer"
        onClick={handlePlayPause}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
      {!isPlaying && (
        <div className="absolute top-0 left-0 right-0 z-20">
          <Image
            src={videoData?.thumbnail}
            alt={"alt"}
            width={320}
            height={420}
            className="object-cover object-center rounded-[15px] h-[420px]  "
          />
        </div>
      )}

      <p className="py-2">{videoData?.name}</p>
    </div>
  );
};

export default VideoItem;
