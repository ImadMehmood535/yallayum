import {
  Banner_heading,
  Banner_slide_1,
  Banner_slide_2,
  Banner_slide_3,
  Banner_slide_4,
  Banner_slide_5,
  bannerBg,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
} from "@/assets";

const slide1 = [
  {
    index: 1,
    name: "Crunchy Strawberry1",
    imageUrl: pic1,
    stars: 3,
    reviews: 120,
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    index: 2,
    name: "Crunchy Strawberry2",
    imageUrl: pic2,
    stars: 5,
    reviews: 150,
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    index: 3,
    name: "Crunchy Strawberry3",
    imageUrl: pic3,
    stars: 4,
    reviews: 420,
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  }, 
];
const slide2 = [
  {
    index: 1,
    name: "Crunchy Strawberry",
    imageUrl: pic4,
    stars: 5,
    reviews: 155,
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    index: 2,
    name: "Crunchy Strawberry2",
    imageUrl: pic5,
    stars: 3,
    reviews: 120,
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    index: 3,
    name: "Crunchy Strawberry3",
    imageUrl: pic6,
    stars: 2,
    reviews: 500,
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const homeBannerSlide = [

  {
    bgColor: "#F9F4ED",
    imageSrc: Banner_slide_1,
    title: "Experience a timeless delight with freeze-dried fruits",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    bgColor: "#FAF4FA",
    imageSrc: Banner_slide_2,
    title: "Experience a timeless delight with freeze-dried fruits",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    bgColor: "#FFF5F5",
    imageSrc: Banner_slide_3,
    title: "Experience a timeless delight with freeze-dried fruits",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    firstimage: Banner_heading,
    imageSrc: Banner_slide_5,
    bannerBackground: bannerBg,
  },
  
];

export { slide1, slide2, homeBannerSlide };
