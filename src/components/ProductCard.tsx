import { Link } from 'react-router-dom'
import type { Product } from '../types/index'
import { money } from '../utils/format'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card product-card">
      <Link to={`/producto/${product.id}`} className="block">
        <div className="product-thumb">
          <img src={product.image} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <p className="text-muted">SKU: {product.sku}</p>
        <p className="price">{money(product.price)}</p>
      </Link>
    </article>
  )
}
