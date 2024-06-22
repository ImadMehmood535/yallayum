import * as yup from "yup";

const checkoutSchema = yup.object().shape({
  fname: yup.string().required("Please enter your name"),
  lname: yup.string().required("Please enter your name"),
  email: yup.string().email().required("Please Enter your email"),
  phone: yup
    .string()
    .min(4, "Please enter your phone number")
    .required("Please enter your phone number"),
  company: yup.string().required("Please enter your company name"),
  street: yup.string().required("Please enter your street name"),
  appartment: yup.string().required("Please enter your appartment name"),
  country: yup.string().required("Please enter your country name"),
  city: yup.string().required("Please enter your city name"),
});

export { checkoutSchema };
