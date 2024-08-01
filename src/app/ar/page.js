import { feedlist } from "@/data/feedlist";
import { reviewData, reviewDataAR } from "@/data/reviewData";
import Blogs from "@/components/Home/Blogs";
import Banner from "@/components/Home/Banner";
import OurImpact from "@/components/Home/OurImpact";
import CustomSlider from "@/components/Home/CustomSlider/CustomSlider";
import InstaFeeds from "@/components/Home/InstaFeeds";
import ProductFeature from "@/components/general/ProductFeature";
import FeedSlider from "@/components/Home/FeedSlider";
import StoreFeatures from "@/components/general/StoreFeatures";
import CategoryList from "@/components/shop/CategoryList";
import { getAllBlogs, getCategories } from "@/cached-requests";
import Link from "next/link";
import { homeBannerSlide, homeBannerSlideAR } from "@/data/slides";
import OurImpactAr from "@/components/Home/OurImpactAr";

export const metadata = {
  title: "Home | Yalla Yum",
  description: "Generated by Clicktap",
};

export default async function HomeAr() {
  const { data: categories } = await getCategories();
  const { data: blogsData } = await getAllBlogs();

  return (
    <>
      <Banner  slides={homeBannerSlideAR}/>
      <div className="py-10 md:py-20 md:pb-10 px-0 md:px-[5%] mx-auto">
        <Link href={"/shop"}>
          <CategoryList itemCount={4} data={categories} />
        </Link>
        {/* <FeatureProduct data={productData} /> */}
      </div>
      <div className="hidden md:block">
        <OurImpactAr  />
      </div>
      <CustomSlider />
      <InstaFeeds reviewData={reviewDataAR} />
      <Blogs blogsData={blogsData} />
      <ProductFeature />
      <FeedSlider feedlist={feedlist} />
      <StoreFeatures />
    </>
  );
}