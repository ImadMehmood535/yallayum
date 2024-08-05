import React from "react";
import Image from "next/image";
import {
  Feature_area,
  GlutenFree,
  NoShugar,
  NonGmo,
  PremiumQuality,
  pic1,
  pic2,
  pic3,
} from "@/assets";
import IconBox from "../Home/IconBox";

const ProductFeatureAR = () => {
  return (
    <div className="ProductFeature pageLayout px-0 mx-auto">
      <div className="container">
        <div className="heading-area text-center">
          <div className="w-full md:max-w-[760px] mx-auto">
            <h2 className="text-4xl kalamFont md:text-7xl text-bold mb-6 text-[#FC4242]  uppercase">
              وجبات خفيفة صحية للأشخاص السعداء
            </h2>
            <p className="text-[#3C3C3B] GeneralSans  font-regular">
              يتم تصنيع فواكهنا المجففة بالتجميد بعناية لتحتفظ بنكهتها الأصلية
              وتغذيتها، مما يجعلها خيارًا صحيًا ولذيذًا للوجبات الخفيفة. مع عدم
              إضافة سكريات أو مواد حافظة، يمكنك الاستمتاع بتناول وجبات خفيفة
              خالية من الشعور بالذنب مع يلا يم
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-1 lg:grid-cols-4 items-center mt-14">
          <div className="feature-box flex flex-col h-full justify-between gap-4 mx-auto max-w-[350px] lg:w-full  ">
            <IconBox
              right={true}
              position="start"
              textposition="left"
              icon={NoShugar}
              title="خالي من السكر"
              content="في يلا يم، نعطي الأولوية لصحتك من خلال تقديم وجبات خفيفة بدون سكر مضاف، مع الحفاظ على النكهات الأصيلة لدبي. استمتع بالحلاوة الطبيعية لمكوناتنا، مما يضمن تجربة تناول وجبات خفيفة لذيذة وخالية من الشعور بالذنب. تذوق جوهر العافية مع كل قضمة"
            />
            <IconBox
              right={true}
              position="start"
              textposition="left"
              icon={PremiumQuality}
              title="عالي الجودة"
              content="في يلا يم، نقدم وجبات خفيفة عالية الجودة تجسد تراث الطهي الغني في دبي. تعد كل قضمة بمذاق فائق ومعايير استثنائية، مصنوعة من أجود المكونات. ارفع مستوى تجربة تناول الوجبات الخفيفة لديك مع التميز الذي لا مثيل له في يلا يم"
            />
          </div>

          <div className=" center-area col-span-2 mx-auto   px-8 o ">
            <div className="relative  group ">
              <div className="relative  z-20">
                <Image
                  src={pic1}
                  alt="Feature_area"
                  width={500}
                  height={500}
                  className="w-full max-w-[400px] sm:max-w-[500px] h-full "
                />
              </div>

              <div className="absolute transition-all group-hover:rotate-[15deg]  right-[10%]   group-hover:-right-[25%]  bottom-[2%]">
                <Image
                  src={pic2}
                  alt="Feature_area"
                  width={400}
                  height={400}
                  className="w-full max-w-[220px] sm:max-w-[350px] h-full"
                />
              </div>
              <div className="absolute transition-all group-hover:-rotate-[15deg]  left-[10%]    group-hover:-left-[25%] bottom-[2%]">
                <Image
                  src={pic3}
                  alt="Feature_area"
                  width={400}
                  height={400}
                  className="w-full max-w-[220px] sm:max-w-[350px] h-full"
                />
              </div>
            </div>
          </div>

          <div className="feature-box flex flex-col h-full justify-between gap-4 mx-auto max-w-[350px] lg:w-full  ">
            <IconBox
              right={true}
              position="end"
              textposition="right"
              icon={NonGmo}
              title="غير معدل وراثيًا"
              content="  في يلا يم، نحن ملتزمون برفاهيتك من خلال وجباتنا الخفيفة غير المعدلة وراثيًا، والمصنوعة من أجود المكونات الطبيعية المصدر. استمتع بالطعم الحقيقي لدبي مع ضمان عدم وجود تعديلات وراثية. وجبة خفيفة صحية واشعر بالفرق"
            />
            <IconBox
              right={true}
              position="end"
              textposition="right"
              icon={GlutenFree}
              title="خالي من الغلوتين"
              content="في يلا يم، نلبي احتياجاتك الغذائية من خلال وجباتنا الخفيفة اللذيذة الخالية من الغلوتين. تذوق النكهات الأصيلة لدبي دون المساس بصحتك. استمتع بوجبات خفيفة ولذيذة وآمنة لأسلوب حياتك الخالي من الغلوتين"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatureAR;
