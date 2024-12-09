import { getAllBlogs } from "@/cached-requests";
import BlogsList from "@/components/Blog/BlogsList";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import React from "react";

export const metadata = {
  title: "Blogs",
  description: "This is a blogs page",
};
const Index = async () => {
  const {
    data: { blogs },
  } = await getAllBlogs();
 
  return (
    <div className="Blogs">
      <InnerpageHeader pagetitle="Blogs" />
      <div className="Blogs-body pageLayout px-0 mx-auto">
        <BlogsList data={blogs} itemCount={9} />
      </div>
    </div>
  );
};

export default Index;
