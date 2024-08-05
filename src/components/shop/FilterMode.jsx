import { Slide1SVG, Slide2SVG } from "@/data/allSvgs";
import React, { useState } from "react";
import { generateThumbnail } from "./GenerateThumbnail";

const FilterMode = ({
  changeVariantImages,
  data,
  setSelectedImage,
  setVariation,
}) => {
  const [choice, setChoice] = useState(0);


  const renderVideo = (url) => {
    return (
      <div className="image-gallery-image">
        <video controls width="100%" height="100%">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  

  const handleChange = (newChoice) => {
    setChoice(newChoice);

    const imagesChange = data?.productVariation[newChoice]?.gallery.map(
      (image) => ({
        original: image,
        thumbnail: image,
      })
    );

    if (data?.videoUrl) {
      generateThumbnail(data.videoUrl, (thumbnailDataUrl) => {
        imagesChange.push({
          original: data.videoUrl,
          thumbnail: thumbnailDataUrl,
          renderItem: () => renderVideo(data.videoUrl),
          thumbnailClass: "video-thumbnail",
        });

        changeVariantImages(imagesChange);
      });
    } else {
      changeVariantImages(imagesChange);
    }

    setSelectedImage(data?.productVariation[newChoice]?.gallery[0]);
    setVariation(data?.productVariation[newChoice]);
  };

  return (
    <div className="w-fit rounded-full flex justify-center items-center gap-4 px-2 py-1 bg-themeGray-0 border-[2.5px] border-[#E4E7ED]">
      <div
        onClick={() => handleChange(0)}
        className={`transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center ${
          choice === 0 ? "bg-black" : "bg-transparent"
        }`}
      >
        <Slide1SVG color={choice === 0 ? "#ffff" : "#cccccc"} />
      </div>
      <div
        onClick={() => handleChange(1)}
        className={`transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center ${
          choice === 1 ? "bg-black" : "bg-transparent"
        }`}
      >
        <Slide2SVG color={choice === 1 ? "#ffff" : "#cccccc"} />
      </div>
    </div>
  );
};

export default FilterMode;
