import React from 'react';

// 1. Define the Product type
type Product = {
  id?: string | number;
  name: string;
  description?: string;
  price?: string | number;
};

// 2. Use Product[] for the data prop
type ProductListProps = {
  data: Product[];
  title?: string;
};

const ProductList: React.FC<ProductListProps> = ({ data, title }) => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((product: Product, idx: number) => (
            <div key={product.id || idx} className="border rounded-lg p-4 shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-muted-foreground">{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground">No products available.</div>
      )}
    </div>
  );
};

export default ProductList;