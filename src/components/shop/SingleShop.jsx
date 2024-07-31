"use client";
import React, { useState, useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import FilterMode from "./FilterMode";
import QuantitySelector from "../general/QuantitySelector";
import ProductInfoTabs from "./ProductInfoTabs";
import AddCartBtn from "./AddCartBtn";
import ProductStoreFeature from "./ProductStoreFeature";
import RatingNoOfReview from "./RatingNoOfReview";
import { getCookie } from "@/hooks/cookies";
import LoginModal from "../general/LoginModal";
import Image from "next/image";
import { generateThumbnail } from "./GenerateThumbnail";
 
const SingleShop = ({ reviewData, data, rating, total_review }) => {
  const [allImages, setAllImages] = useState([]);
  const [variation, setVariation] = useState(data?.productVariation[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    const initialImages = data?.productVariation[0]?.gallery.map((image) => ({
      original: image,
      thumbnail: image,
    }));

    if (data?.videoUrl) {
      generateThumbnail(data.videoUrl, (thumbnailDataUrl) => {
        initialImages.push({
          original: data.videoUrl,
          thumbnail: thumbnailDataUrl,
          renderItem: () => renderVideo(data.videoUrl),
          thumbnailClass: "video-thumbnail",
        });

        setAllImages(initialImages);
      });
    } else {
      setAllImages(initialImages);
    }
  }, [data]);

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

  const [quantity, setQuantity] = useState(1);

  const authorized = getCookie("token");

  const replaceIconCodesWithEmojis = (text) => {
    return text.replace(/\[`(U\+\w+)\`]/g, (match, p1) => {
      const codePoint = parseInt(p1.replace("U+", ""), 16);
      const emoji = String.fromCodePoint(codePoint);
      return `<span class="emoji">${emoji}</span>`;
    });
  };

  const processedDescription = replaceIconCodesWithEmojis(
    data?.shortDescription
  );

  return (
    <div className="SingleShop pageLayout pb-10 md:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="image-area">
            <ImageGallery
              items={allImages}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              disableThumbnailScroll={true}
              thumbnailPosition="left"
              slideOnThumbnailOver={true}
              renderItem={(item) =>
                item.renderItem ? (
                  item.renderItem()
                ) : (
                  <img src={item.original} alt={data?.name} />
                )
              }
            />
          </div>
          <div className="content-area py-6">
            <div className="product-info">
              <h2 className="kalamFont uppercase text-5xl font-semibold">
                {data?.name}
              </h2>
              <div className="rating-area my-4">
                <RatingNoOfReview
                  avgrating={reviewData?.averageRating}
                  totalReview={reviewData?.totalReviews}
                />
              </div>

              <div
                className="GeneralSans text-lg font-normal customList"
                dangerouslySetInnerHTML={{ __html: processedDescription }}
              />
              <div className="mt-8 font-semibold GeneralSans flex flex-row gap-2 pb-4 border-b-1 items-end">
                <div className="price-area gap-6 flex flex-row items-end">
                  <span className="sale-price text-[#FC4242] text-3xl">
                    AED {variation?.salePrice}
                  </span>

                  {variation?.price && (
                    <span className="regular-price text-[#B0B0B0] line-through text-2xl">
                      AED {variation?.price}
                    </span>
                  )}
                </div>

                <p>({variation?.weight} gram)</p>
              </div>
            </div>
            <div className="quantity-variation-container my-6 flex flex-col md:flex-row gap-6">
              {data?.productVariation?.length > 1 && (
                <div className="flex flex-col gap-2">
                  <span className="GeneralSans text-lg font-normal">
                    Packages:
                  </span>
                  <FilterMode
                    changeVariantImages={setAllImages}
                    data={data}
                    setSelectedImage={() => {}}
                    setVariation={setVariation}
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <span className="GeneralSans text-lg font-normal">
                  Quantity:
                </span>
                <QuantitySelector
                  setQuantity={setQuantity}
                  quantity={quantity}
                />
              </div>
            </div>
            <div className="btn-area relative">
              {authorized && (
                <AddCartBtn
                  productVariationId={variation?.id}
                  quantity={quantity}
                />
              )}

              {!authorized && <LoginModal />}
            </div>
            <div className="feature mt-6">
              <ProductStoreFeature name={data?.name} />
            </div>
          </div>
        </div>
        <div className=" mt-6">
          <ProductInfoTabs data={data} />
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
