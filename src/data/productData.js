const {
  productvar1,
  productvar2,
  product2var1,
  product2var2,
  product3var1,
  product3var2,
  gallery1,
  gallery2,
  single_product_image,
} = require("@/assets");

const productData = [
  {
    id: 1,
    title: "product 1",
    slug: "strawberry-crunchy",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    longDescription:
      "Indulge in the natural sweetness of our freeze-dried strawberries. Handpicked at their peak ripeness, these ruby-red gems are transformed into delicate, crisp bites that burst with flavor. Packed with antioxidants and high in fiber, our freeze-dried strawberries are a guilt-free delight that adds a touch of freshness to your snacking experience. Taste the essence of Dubai’s vibrant culture with every irresistible bite.",
    ingredients:
      "Indulge in the natural sweetness of our freeze-dried strawberries. Handpicked at their peak ripeness, these ruby-red gems are transformed into delicate, crisp bites that burst with flavor. Packed with antioxidants and high in fiber, our freeze-dried strawberries are a guilt-free delight that adds a touch of freshness to your snacking experience. Taste the essence of Dubai’s vibrant culture with every irresistible bite.",
    gallery: [single_product_image, single_product_image],
    variation: [
      {
        variationId: 1,
        cateid: 1,
        variationType: "Packet",
        variationPrice: 96.0,
        variationSalePrice: 90.0,
        variationImage: productvar1,
        variationWeight: 20,
        gallery: [productvar1, productvar2],
      },
      {
        variationId: 2,
        cateid: 2,
        variationType: "Box",
        variationPrice: 106.0,
        variationSalePrice: 101.0,
        variationImage: productvar2,
        variationWeight: 100,
        gallery: [productvar2, productvar1],
      },
    ],
  },
  {
    id: 2,
    title: "product 2",
    slug: "crunchy-fig",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    gallery: [single_product_image, single_product_image],
    variation: [
      {
        variationId: 1,
        cateid: 1,
        variationType: "Packet",
        variationPrice: 107.0,
        variationImage: product2var1,
        variationWeight: 20,
        gallery: [product2var1, product2var2],
      },
      {
        variationId: 2,
        cateid: 2,
        variationType: "Box",
        variationPrice: 208.0,
        variationImage: product2var2,
        variationWeight: 100,
        gallery: [product2var2, product2var1],
      },
    ],
  },
  {
    id: 3,
    title: "product 3",
    slug: "strawberry-crunchy",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",

    variation: [
      {
        variationId: 1,
        cateid: 1,
        variationType: "Packet",
        variationPrice: 209.0,
        variationImage: product3var1,
        variationWeight: 20,
        gallery: [product3var1, product3var2],
      },
      {
        variationId: 2,
        cateid: 2,
        variationType: "Box",
        variationPrice: 309.0,
        variationImage: product3var2,
        variationWeight: 100,
        gallery: [product3var2, product3var1],
      },
    ],
  },
];
export { productData };
