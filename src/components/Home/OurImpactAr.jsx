import React from "react";
import {
  Healthiest_Snacking2,
  Supporting_Dubai,
  Sustainable_Sourcing,
  Sustainable_Sourcing3,
} from "@/assets";
import ImpactItem from "./ImpactItem";
const OurImpactAr = () => {
  return (
    <div className="OurImpact pageLayout   px-0 mx-auto">
      <div className="container">
        <div className="  !pb-10">
          <div className="heading-area text-center">
            <div className="w-full md:max-w-[760px] mx-auto">
              <h4 className="sub-heading uppercase kalamFont text-[#B051AC] text-xl">
                مستوحاة من حب تناول الوجبات الخفيفة
              </h4>
              <h2 className="text-5xl GeneralSans font-medium mb-7">تأثيرنا</h2>
              <p className="text-[#3C3C3B] font-regular GeneralSans">
                انغمس في أحدث منشورات مدونتنا واكتشف عالمًا من مغامرات الطهي،
                ونصائح العافية، والنسيج الغني لثقافة دبي. ابق على اطلاع دائم،
                وإلهام، وتفاعل من خلال الإشتراك في مدونتنا التي تعد بوابتك
                للنكهة، والصحة ، والرؤى المحلية
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ImpactItem
              number={true}
              position={true}
              image={Sustainable_Sourcing}
              subheading="رقم . 01"
              title="نصائح العافية"
              text="في يلا يم، نعطي الأولوية لنظام غذائي متوازن، وممارسة التمارين الرياضية بانتظام، والنوم الكافي لتحقيق الصحة المثالية"
            />
            <ImpactItem
              number={true}
              position={true}
              image={Healthiest_Snacking2}
              subheading="رقم.02"
              title="نسيج غني لثقافة دبي"
              text="انغمس في مزيج آسر من التراث التقليدي والإبتكار الحديث الذي يحدد نسيج دبي الثقافي الغني"
            />
            <ImpactItem
              number={true}
              position={false}
              image={Sustainable_Sourcing3}
              subheading="رقم.03"
              title=" يلا يم يجمع بين النكهة والتغذية"
              text="يمزج يلا يم بين النكهات الغنية والعناصر الغذائية الأساسية بسلاسة، ويقدم خيارات وجبات خفيفة لذيذة وصحية"
            />
            <ImpactItem
              number={true}
              position={false}
              image={Supporting_Dubai}
              subheading="رقم.04"
              title="فوائد الفواكه المجففة بالتجميد من يلا يم"
              text="تحتفظ فواكه يلا يم المجففة بالتجميد بالنكهات الطبيعية والعناصر الغذائية الأساسية، مما يجعلها خيارًا لذيذًا وصحيًا للوجبات الخفيفة"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpactAr;
