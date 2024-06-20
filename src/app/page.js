import { blogsData } from "@/data/blogsData";
import { feedlist } from "@/data/feedlist";
import { reviewData } from "@/data/reviewData";
import Blogs from "@/components/Home/Blogs";
import Banner from "@/components/Home/Banner";
import FeatureProduct from "@/components/Home/FeatureProduct";
import OurImpact from "@/components/Home/OurImpact";
import CustomSlider from "@/components/Home/CustomSlider/CustomSlider";
import InstaFeeds from "@/components/Home/InstaFeeds";
import ProductFeature from "@/components/general/ProductFeature";
import FeedSlider from "@/components/Home/FeedSlider";
import { productData } from "@/data/productData";
import StoreFeatures from "@/components/general/StoreFeatures";

export default function Home() {
  return (
    <>
      <Banner />
      <FeatureProduct data={productData} />
      <div className="hidden md:block">
        <OurImpact />
      </div>
      <CustomSlider />
      <div className="hidden md:block">
      <InstaFeeds reviewData={reviewData} />
      </div>
      <Blogs blogsData={blogsData} />
      <ProductFeature />
      <FeedSlider feedlist={feedlist} />
      <StoreFeatures />
    </>
  );
}
