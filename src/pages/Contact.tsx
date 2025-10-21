import WhatsAppButton from '../components/WhatsAppButton'

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-wine">Contacto</h1>
        <p style={{ marginTop: 12, color: '#4b5563' }}>
          Escríbenos para pedidos personalizados, tiempos de entrega y catálogo B2B.
        </p>
        <div style={{ marginTop: 24, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <WhatsAppButton text="Hola, quiero más información sobre productos y tiempos de entrega." />
          <a href="mailto:hola@arteberakah365.com" className="underline">hola@arteberakah365.com</a>
        </div>
      </div>
    </section>
  )
}
