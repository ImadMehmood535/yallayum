import CheckoutComponent from "@/components/Checkout/CheckoutComponent";
import InnerpageHeader from "@/components/general/InnerpageHeader";
import React from "react";

export const metadata = {
  title: "Check Out",
  description: "This is a checkout page",
};

const Index = ({ searchParams }) => {
  const type = searchParams.type;
  const payload =  searchParams.payload;

  return (
    <div className="checkout">
      <InnerpageHeader pagetitle="Checkout" />
      <CheckoutComponent type={type} makeYourMix={payload} />
    </div>
  );
};

export default Index;
