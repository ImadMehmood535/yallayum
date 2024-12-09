import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please type correct email")
    .required("Please enter your email"),
  password: yup.string().required("Password is requried"),
});

const forgetPassword = yup.object().shape({
  email: yup
    .string()
    .email("Please type correct email")
    .required("Please enter your email"),
});
const resetPassword = yup.object().shape({
  password: yup.string().required("Please enter your new password"),
  newPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your new password"),
});

export { loginSchema, forgetPassword, resetPassword };
