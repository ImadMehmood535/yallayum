import React from "react";
import dynamic from 'next/dynamic';
import { productData } from "@/data/productData";
import { blogsData } from "@/data/blogsData";
import { feedlist } from "@/data/feedlist";
import { reviewData } from "@/data/reviewData";
import Banner from "@/components/Home/Banner";

 const FeatureProduct = dynamic(() => import('@/components/Home/FeatureProduct'));
const OurImpact = dynamic(() => import('@/components/Home/OurImpact'));
const CustomSlider = dynamic(() => import('@/components/Home/CustomSlider/CustomSlider'));
const InstaFeeds = dynamic(() => import('@/components/Home/InstaFeeds'));
const Blogs = dynamic(() => import('@/components/Home/Blogs'));
const ProductFeature = dynamic(() => import('@/components/general/ProductFeature'));
const FeedSlider = dynamic(() => import('@/components/Home/FeedSlider'));
const StoreFeatures = dynamic(() => import('@/components/general/StoreFeatures'));

export default function Home() {
  return (
    <>
      <Banner />
      <FeatureProduct data={productData} />
      <OurImpact />
      <CustomSlider />
      <InstaFeeds reviewData={reviewData} />
      <Blogs blogsData={blogsData} />
      <ProductFeature />
      <FeedSlider feedlist={feedlist} />
      <StoreFeatures />
    </>
  );
}
