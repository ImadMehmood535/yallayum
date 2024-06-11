"use client";
import ProductFeature from "@/components/general/ProductFeature";
import SingleShop from "@/components/shop/SingleShop";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { productData } from "@/data/productData";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const variationType = searchParams.get("variation");
  const [filter, setFilter] = useState(variationType);

  const product = productData.find((product) => product.id === parseInt(id));

  const selectedVariation = product?.variation.find(
    (variation) => variation.variationType === variationType
  );

  return (
    <div className="single-product">
      <div className="pageLayout px-0 mx-auto">
        {product && selectedVariation ? (
          <>
            <SingleShop
              data={product}
              selectedVariation={selectedVariation}
              setFilter={setFilter}
              filter={filter}
            />
            <ProductFeature />
          </>
        ) : (
          <p>Product or variation not found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
