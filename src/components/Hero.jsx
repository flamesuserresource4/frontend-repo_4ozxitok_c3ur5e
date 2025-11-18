import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.1),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Shop the latest. Feel the vibe.
            </h1>
            <p className="mt-5 text-blue-100 text-lg leading-relaxed">
              A clean, modern e‑commerce experience built with HTML, CSS and JavaScript — powered by a fast backend for real data.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#products" className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 transition-colors">
                Browse Products
              </a>
              <a href="#about" className="px-6 py-3 rounded-xl border border-blue-400/40 text-blue-200 hover:bg-white/5 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-2">
              <img src="/store-hero.jpg" alt="Store preview" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 text-blue-100 text-sm">
              Fast, responsive and delightful.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
