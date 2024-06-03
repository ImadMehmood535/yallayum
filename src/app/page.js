import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import FeatureProduct from "@/components/FeatureProduct";
import FeedSlider from "@/components/FeedSlider";
import InstaFeeds from "@/components/InstaFeeds";
import OurImpact from "@/components/OurImpact";
import ProductFeature from "@/components/ProductFeature";
import { blogsData } from "@/data/blogsData";
import { featurecollectionData } from "@/data/featurecollections";
import { feedlist } from "@/data/feedlist";
import { reviewData } from "@/data/reviewData";
 

export default function Home() {
  return (
    <>
      <Banner />
      <FeatureProduct data={featurecollectionData}  />
      <OurImpact/>
      <InstaFeeds reviewData={reviewData}/>
      <Blogs blogsData={blogsData}/>
      <ProductFeature/>
      <FeedSlider feedlist={feedlist}/>
    </>
  );
}
