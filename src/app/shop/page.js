import { getAllProducts, getCategories } from "@/cached-requests";
import ShopePage from "@/components/shop/ShopePage";

const Index = async () => {
  const { data: categories } = await getCategories();
  const { data: products } = await getAllProducts();

  return <ShopePage categories={categories} products={products} />;
};

export default Index;
