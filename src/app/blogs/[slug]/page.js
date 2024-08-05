import { getSingleBlog } from "@/cached-requests";
import SingleBlog from "@/components/Blog/SingleBlog";
import React from "react";

export async function generateMetadata({ params }, parent) {
  const { data: data } = await getSingleBlog(params.slug);

  return {
    title: data?.name,
    description: data?.shortDescription,
  };
}

const Page = async ({ params }) => {
  const { data: data } = await getSingleBlog(params.slug);

  return (
    <div className="single-blog">
      <SingleBlog data={data} />
    </div>
  );
};

export default Page;
