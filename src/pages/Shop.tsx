import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Shop = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Men's Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};