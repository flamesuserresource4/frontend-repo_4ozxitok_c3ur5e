import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((i) => (i.id || i.title) === (product.id || product.title))
      if (existing) {
        return prev.map((i) =>
          (i.id || i.title) === (product.id || product.title) ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(item) {
    setCart((prev) => prev.filter((i) => (i.id || i.title) !== (item.id || item.title)))
  }

  async function checkout() {
    if (cart.length === 0) return
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: 'Guest',
          customer_email: 'guest@example.com',
          address: '123 Demo Street',
          items: cart.map((c) => ({ product_id: String(c.id || ''), title: c.title, price: c.price, quantity: c.quantity })),
          total: cart.reduce((s, i) => s + i.price * i.quantity, 0)
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Checkout failed')
      setMessage(`Order placed! ID: ${data.order_id}`)
      setCart([])
    } catch (e) {
      setMessage(String(e.message || e))
    } finally {
      setTimeout(() => setMessage(''), 4000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          {loading ? (
            <div className="text-blue-200">Loading products...</div>
          ) : (
            <ProductGrid products={products} onAdd={addToCart} />
          )}
        </div>
        <div className="md:col-span-1">
          <Cart items={cart} onRemove={removeFromCart} onCheckout={checkout} />
        </div>
      </div>

      {message && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-lg">
          {message}
        </div>
      )}

      <footer className="mt-20 py-10 text-center text-blue-200/70">
        Built with HTML, CSS and JavaScript.
      </footer>
    </div>
  )
}

export default App
