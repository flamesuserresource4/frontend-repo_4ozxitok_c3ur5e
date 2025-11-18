import React from 'react';

export default function Cart({ items, onRemove, onCheckout }) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <aside className="sticky top-6 bg-slate-800/60 border border-white/10 rounded-2xl p-5">
      <h3 className="text-white font-semibold">Your cart</h3>
      {items.length === 0 ? (
        <p className="text-blue-200/70 text-sm mt-2">Your cart is empty.</p>
      ) : (
        <div className="mt-3 space-y-3">
          {items.map((i) => (
            <div key={i.id || i.title} className="flex items-center justify-between gap-3 text-sm">
              <div>
                <p className="text-white line-clamp-1">{i.title}</p>
                <p className="text-blue-200/70">{i.quantity} × ${i.price.toFixed(2)}</p>
              </div>
              <button onClick={() => onRemove(i)} className="text-blue-300 hover:text-white">Remove</button>
            </div>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-white font-semibold">Total</span>
            <span className="text-white font-bold">${total.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} className="w-full mt-3 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">Checkout</button>
        </div>
      )}
    </aside>
  );
}
