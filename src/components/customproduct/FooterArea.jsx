import React from "react";
import AddCartBtn from "../shop/AddCartBtn";
import ButtonVariation2 from "../general/ButtonVariation2";

const FooterArea = ({ calculateTotalAmount, filledPercentage }) => {
  return (
    <div className="FooterArea">
      <div className="footer-area text-center GeneralSans mt-6">
        <h2 className="text-3xl GeneralSans font-semibold ">Amount to Pay</h2>
        <h2 className="text-3xl GeneralSans font-semibold text-[#FC4242]">
          AED {calculateTotalAmount().toFixed(2)}
        </h2>
        <div className="btn-area mt-6">
          <ButtonVariation2 filledPercentage={filledPercentage} />
        </div>
      </div>
    </div>
  );
};

export default FooterArea;
