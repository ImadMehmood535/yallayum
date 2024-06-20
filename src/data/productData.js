const {
  productvar1,
  productvar2,
  product2var1,
  product2var2,
  product3var1,
  product3var2,
  gallery1,
  gallery2,
} = require("@/assets");

const productData = [
  {
    id: 1,
    title: "Strawberry Crunchy",
    slug: "strawberry-crunchy",
    shortDescription: `The crispy vegetable chips for a conscious diet. 100% yellow beetroot, 0% fat, 0% additives.
    <ul>
    <li>made from 100% ripe vegetables</li>
    <li>made from 100% ripe vegetables</li>
    <li>made from 100% ripe vegetables</li>
    <li>made from 100% ripe vegetables</li>
    </ul>`,
    longDescription:
      "Indulge in the natural sweetness of our freeze-dried strawberries. Handpicked at their peak ripeness, these ruby-red gems are transformed into delicate, crisp bites that burst with flavor. Packed with antioxidants and high in fiber, our freeze-dried strawberries are a guilt-free delight that adds a touch of freshness to your snacking experience. Taste the essence of Dubai’s vibrant culture with every irresistible bite.",
    ingredients:
      "Indulge in the natural sweetness of our freeze-dried strawberries. Handpicked at their peak ripeness, these ruby-red gems are transformed into delicate, crisp bites that burst with flavor. Packed with antioxidants and high in fiber, our freeze-dried strawberries are a guilt-free delight that adds a touch of freshness to your snacking experience. Taste the essence of Dubai’s vibrant culture with every irresistible bite.",
    gallery: [gallery1, gallery2],
    variation: [
      {
        variationId: 1,
        variationType: "Packet",
        variationPrice: 96.00,
        variationSalePrice: 90.00,
        variationImage: productvar1,
        variationWeight: 20,
      },
      {
        variationId: 2,
        variationType: "Box",
        variationPrice: 106.00,
        variationSalePrice: 101.00,
        variationImage: productvar2,
        variationWeight: 100,
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
    gallery: [gallery1, gallery2],
    variation: [
      {
        variationId: 1,
        variationType: "Packet",
        variationPrice: 107.0,
        variationImage: product2var1,
        variationWeight: 20,
      },
      {
        variationId: 2,
        variationType: "Box",
        variationPrice: 208.0,
        variationImage: product2var2,
        variationWeight: 100,
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
        variationWeight: 20,
      },
      {
        variationId: 2,
        variationType: "Box",
        variationPrice: 309.0,
        variationImage: product3var2,
        variationWeight: 100,
      },
    ],
  },
];
export { productData };
