import { Link } from 'react-router-dom'
import { collections } from '../data/collections'

export default function Home() {
  return (
    <section className="section">
      <div className="container grid grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h1 className="text-wine">Arte Berakah 365</h1>
          <p style={{ marginTop: 12, fontSize: 18, color: '#4b5563' }}>
            Tienda de estampado y sublimación con enfoque cristiano. Inspiramos, bendecimos y conectamos la fe con el arte.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
            <Link to="/tienda" className="btn btn-primary">Ver Tienda</Link>
            <Link to="/fundacion" className="btn btn-outline">Semillas de Mostaza</Link>
          </div>
        </div>
        <div className="hero">
          <span style={{ color: 'var(--gold)', fontFamily: 'Montserrat' }}>
            Colecciones: Génesis 25 y Grados
          </span>
        </div>
      </div>

      <div className="container" style={{ marginTop: 32 }}>
        <h2 style={{ marginBottom: 12 }}>Colecciones</h2>
        <div className="grid grid-2">
          {collections.map((c) => (
            <article key={c.id} className="card">
              <h3>{c.name}</h3>
              {c.tagline && <p className="text-muted">{c.tagline}</p>}
              {c.description && <p style={{ marginTop: 6, color: '#4b5563' }}>{c.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
