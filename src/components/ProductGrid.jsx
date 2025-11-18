import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAdd }) {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured products</h2>
          <p className="text-blue-200/80 mt-1">Curated picks just for you</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id || p.title} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
