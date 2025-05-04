import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/components/types/types";

type ProductListProps = {
  data: Product[];
  title?: string;
};

const ProductList: React.FC<ProductListProps> = ({ data, title }) => {
  return (
    <div className="my-10">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((product: Product, idx: number) => (
            <ProductCard
              key={product.slug || product.id || idx}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          No products available.
        </div>
      )}
    </div>
  );
};

export default ProductList;