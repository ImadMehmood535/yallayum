import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email().required("Please Enter your email"),
  phone: yup.string().min(4 , "Please enter your phone number").required("Please enter your phone number"),
  subject: yup.string().required("Let us know about subject of contacting us"),
  message: yup.string().required("What do you want to say?"),
});

export { contactSchema };
