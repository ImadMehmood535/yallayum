import { getAllFlavor, getAllSizes } from "@/cached-requests";
import CreateProduct from "@/components/customproduct/CreateProduct";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import React from "react";

export const metadata = {
  title: "Make Your Mix",
  description: "This is a custom Product",
};

const Page = async () => {
  const { data: variations } = await getAllFlavor();
  return (
    <div className="custom-product-page">
      <InnerpageHeader pagetitle="Make your mix" font={true} />
      <CreateProduct variations={variations} />
    </div>
  );
};

export default Page;
