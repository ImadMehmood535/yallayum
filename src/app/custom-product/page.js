import CreateProduct from "@/components/customproduct/CreateProduct";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import { variations } from "@/data/variations";
import React from "react";

const page = () => {
  return (
    <div className="custom-product-page">
      <InnerpageHeader pagetitle="Make your mix" />
      <CreateProduct variations={variations}/>
    </div>
  );
};

export default page;
