import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h1>Página no encontrada</h1>
        <p className="text-muted" style={{ marginTop: 8 }}>La ruta que buscas no existe.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 24 }}>Volver al inicio</Link>
      </div>
    </section>
  )
}
