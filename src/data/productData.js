const {
  productvar1,
  productvar2,
  product2var1,
  product2var2,
  product3var1,
  product3var2,
} = require("@/assets");

const productData = [
  {
    id: 1,
    title: "Strawberry Crunchy",
    slug: "strawberry-crunchy",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    variation: [
      {
        variationId: 1,
        variationType: "Packet",
        variationPrice: 96.0,
        variationImage: productvar1,
      },
      {
        variationId: 2,
        variationType: "Box",
        variationPrice: 106.0,
        variationImage: productvar2,
      },
    ],
  },
  {
    id: 2,
    title: "Crunchy Fig",
    slug: "crunchy-fig",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    variation: [
      {
        variationId: 1,
        variationType: "Packet",
        variationPrice: 107.0,
        variationImage: product2var1,
      },
      {
        variationId: 2,
        variationType: "Box",
        variationPrice: 208.0,
        variationImage: product2var2,
      },
    ],
  },
  {
    id: 3,
    title: "Strawberry Crunchy",
    slug: "strawberry-crunchy",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    variation: [
      {
        variationId: 1,
        variationType: "Packet",
        variationPrice: 209.0,
        variationImage: product3var1,
      },
      {
        variationId: 2,
        variationType: "Box",
        variationPrice: 309.0,
        variationImage: product3var2,
      },
    ],
  },
];
export { productData };
