import * as yup from "yup";

const userReviewSchema = yup.object().shape({
  stars: yup.number().min(1 ,"Please give stars").required("Please give stars"),
  userReview: yup.string().required("Please give feedback"),
});

export { userReviewSchema };
