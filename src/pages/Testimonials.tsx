export default function Testimonials() {
  const data = [
    { id: 1, quote: 'El diseño me recordó una promesa de Dios que necesitaba.', author: 'Laura' },
    { id: 2, quote: 'Excelente calidad y mensaje con propósito.', author: 'Julián' }
  ]
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-wine">Testimonios</h1>
        <div className="grid grid-2" style={{ marginTop: 16 }}>
          {data.map((t) => (
            <blockquote key={t.id} className="card">
              <p style={{ fontStyle: 'italic' }}>“{t.quote}”</p>
              <footer className="text-muted" style={{ marginTop: 8 }}>— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
