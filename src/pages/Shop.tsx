import { useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import FilterBar from '../components/FilterBar'

export default function Shop() {
  const [filter, setFilter] = useState<string>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return products
    return products.filter((p) => p.collectionId === filter)
  }, [filter])

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-wine">Tienda</h1>
        <p className="text-muted" style={{ marginBottom: 12 }}>Filtra por colección y descubre productos con propósito.</p>

        <FilterBar value={filter} onChange={setFilter} />

        {filtered.length === 0 ? (
          <p>No hay productos en esta colección por ahora.</p>
        ) : (
          <div className="grid grid-3">
            {filtered.map((p) => (<ProductCard key={p.id} product={p} />))}
          </div>
        )}
      </div>
    </section>
  )
}
