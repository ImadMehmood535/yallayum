"use client";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutTotal from "./CheckoutTotal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { single_product_image } from "@/assets";
import { checkoutSchema } from "@/validations/checkoutform";
import { API } from "@/api";
import { errorToast, successToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { options } from "@/data/cities";

const CheckoutComponent = ({ type, makeYourMix }) => {
  const [customProduct, setCustomProduct] = useState(null);

  useEffect(() => {
    if (makeYourMix) {
      setCustomProduct(JSON.parse(makeYourMix));
    }
  }, [makeYourMix]);

  const [cartData, setCartData] = useState(null);
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await API.getCartData();
      setCartData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (type === "general") {
      getData();
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const [loading, setLoadiong] = useState(false);

  const [city, setCity] = useState(null);

  useEffect(() => {
    setCity(getValues("country"));
  }, [watch("country")]);

  const [total, setTotal] = useState(0);

  const filterDeliveryPrice = options?.find((item) => item?.name === city);

  const onSubmit = async (data) => {
    setLoadiong(true);
    try {
      if (type === "general") {
        const payload = {
          totalPrice: parseFloat(total + filterDeliveryPrice?.price).toFixed(2),
          orderItems: cartData?.map((item) => {
            return {
              variationId: item?.variationId,
              quantity: item?.quantity,
            };
          }),
        };
        await API.placeOrder(payload);
        successToast("We have received your order, we will contact you soon");

        router.push("/shop");
      } else if (type === "custom") {
        const payload = {
          totalPrice: parseFloat(
            customProduct?.totalPrice + filterDeliveryPrice?.price
          ).toFixed(2),
          customOrderItems: customProduct?.customOrderItems?.map((item) => {
            return {
              grams: item?.grams,
              flavorItemId: item?.flavorItemId,
            };
          }),
        };

        await API.placeCustomOrder(payload);
        successToast("We have received your order, we will contact you soon");
        router.push("/shop");
      }

      reset();
      setLoadiong(false);
    } catch (error) {
      console.error("Error submitting order:", error);
      setLoadiong(false);
      errorToast(error, "Can not create order at the moment ");
    }
  };

  return (
    <div className="CheckoutComponent">
      <div className="AboutCompany pageLayout px-0 mx-auto">
        <div className="container">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row justify-between gap-16">
              <div className="w-full md:w-[65%]">
                <CheckoutForm
                  register={register}
                  errors={errors}
                  options={options}
                />
              </div>
              <div className="w-full md:w-[35%]">
                <CheckoutTotal
                  setTotal={setTotal}
                  filterDeliveryPrice={filterDeliveryPrice}
                  loading={loading}
                  type={type}
                  cartitem={type === "general" ? cartData : customProduct}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
