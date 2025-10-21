import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { money, waLink } from '../utils/format'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const phone = import.meta.env.VITE_WHATSAPP_PHONE as string

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <p>Producto no encontrado. <Link to="/tienda" className="underline">Volver a tienda</Link></p>
        </div>
      </section>
    )
  }

  const message = `Hola, me interesa el producto *${product.name}* (SKU ${product.sku}) por ${money(product.price)}. ¿Disponible?`

  return (
    <section className="section">
      <div className="container grid grid-2" style={{ gap: 24 }}>
        <div className="detail-gallery">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <h1 className="text-wine">{product.name}</h1>
          <p className="text-muted" style={{ marginTop: 8 }}>SKU: {product.sku}</p>
          <p style={{ fontSize: 24, marginTop: 8 }} className="price">{money(product.price)}</p>
          {product.short && <p style={{ marginTop: 12, color: '#4b5563' }}>{product.short}</p>}

          <div className="detail-actions">
            <a href={waLink(phone, message)} target="_blank" rel="noreferrer" className="btn btn-primary">Pedir por WhatsApp</a>
            <Link to="/tienda" className="btn btn-outline">Seguir comprando</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
