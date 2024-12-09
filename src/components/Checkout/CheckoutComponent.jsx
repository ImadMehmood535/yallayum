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
import { setCookie } from "@/hooks/cookies";

const CheckoutComponent = ({ type, makeYourMix }) => {
  const [customProduct, setCustomProduct] = useState(null);
  const [paymentMode, setPaymentMode] = useState("COD");

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
    console.log(data, "Data");
    setLoadiong(true);
    try {
      if (type === "general") {
        const payload = {
          customerData: data,
          paymentMode: paymentMode,
          totalPrice: parseFloat(total).toFixed(2),
          deliveryCharges: parseFloat(filterDeliveryPrice?.price).toFixed(2),
          orderItems: cartData?.map((item) => {
            return {
              variationId: item?.variationId,
              quantity: item?.quantity,
            };
          }),
        };
        const response = await API.placeOrder(payload);
        successToast(response?.data?.message);
        if (paymentMode === "ONLINE") {
          setCookie("invoiceId", response?.data?.data?.invoiceId);
          window.location.assign(response?.data?.data?.url);
        } else {
          router.push("/shop");
        }
      } else if (type === "custom") {
        const payload = {
          customerData: data,
          paymentMode: paymentMode,
          totalPrice: parseFloat(customProduct?.totalPrice).toFixed(2),
          deliveryCharges: parseFloat(filterDeliveryPrice?.price).toFixed(2),
          customOrderItems: customProduct?.customOrderItems?.map((item) => {
            return {
              grams: item?.grams,
              flavorItemId: item?.flavorItemId,
            };
          }),
        };

        const response = await API.placeCustomOrder(payload);
        successToast(response?.data?.message);
        if (paymentMode === "ONLINE") {
          setCookie("invoiceId", response?.data?.data?.invoiceId);
          window.location.assign(response?.data?.data?.url);
        } else {
          router.push("/shop");
        }
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
                  setPaymentMode={setPaymentMode}
                  paymentMode={paymentMode}
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
