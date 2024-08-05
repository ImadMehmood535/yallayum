import React from "react";
import FeatureIconBox from "./FeatureIconBox";
import { guarantee_icon, purity_icon, shipping_icon } from "@/assets";

const StoreFeaturesAR = () => {
  return (
    <div className="StoreFeatures pageLayout px-0 mx-auto bg-[#F9F1F8]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureIconBox
            position="center"
            textposition="center"
            icon={purity_icon}
            title="ضمان النقاء"
            content="فقط الفاكهة الناضجة تمامًا، بدون إضافة أي إضافات."
          />
          <FeatureIconBox
            position="center"
            textposition="center"
            icon={guarantee_icon}
            title="ضمان الطعم لمدة 30 يوماً"
            content="إذا لم يعجبك، أرسله مرة أخرى خلال 30 يومًا."
          />
          <FeatureIconBox
            position="center"
            textposition="center"
            icon={shipping_icon}
            title="شحن مجاني ابتداءً من 100 درهم"
            content="الشحن المجاني متاح من عربة التسوق."
          />
        </div>
      </div>
    </div>
  );
};

export default StoreFeaturesAR;
