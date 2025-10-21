import WhatsAppButton from '../components/WhatsAppButton'

export default function Foundation() {
  const text = 'Hola, quiero apoyar la campaña Semillas de Mostaza. ¿Cómo participo?'
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-wine">Semillas de Mostaza</h1>
        <p style={{ marginTop: 12, color: '#4b5563', maxWidth: 720 }}>
          Iniciativa solidaria para sembrar esperanza. Tu compra aporta a acciones de impacto espiritual y social.
        </p>
        <div style={{ marginTop: 24 }}>
          <WhatsAppButton text={text} />
        </div>
      </div>
    </section>
  )
}
