import ProductList from "@/components/shared/product/product-list";
import { getProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {

  const latestProducts = await getProducts();

  return (
    <div>
      <ProductList data={latestProducts} title="New Arrivals" />
    </div>
  );
};

export default Homepage;
