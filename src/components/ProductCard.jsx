import React from 'react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl bg-slate-800/60 border border-white/10 overflow-hidden hover:border-blue-400/40 transition-colors">
      <div className="aspect-square overflow-hidden bg-slate-900">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold line-clamp-1">{product.title}</h3>
        <p className="text-blue-200/70 text-sm line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white font-bold">${product.price.toFixed(2)}</span>
          <button onClick={() => onAdd(product)} className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
