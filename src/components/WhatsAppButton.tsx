import { waLink } from '../utils/format'

type Props = { text: string }

export default function WhatsAppButton({ text }: Props) {
  const phone = (import.meta.env.VITE_WHATSAPP_PHONE as string | undefined)?.trim()

  // Si falta el número, dejamos el botón deshabilitado y avisamos en consola
  if (!phone) {
    console.warn('VITE_WHATSAPP_PHONE no está definido. Crea .env.local con tu número.')
    return (
      <button className="btn btn-primary" disabled title="Configura tu número en .env.local">
        Pedir por WhatsApp
      </button>
    )
  }

  return (
    <a
      className="btn btn-primary"
      href={waLink(phone, text)}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-5.99C.122 5.3 5.51 0 12.057 0c3.187 0 6.167 1.24 8.41 3.49A11.82 11.82 0 0124 11.943c-.003 6.627-5.39 12.02-12.057 12.02a12.1 12.1 0 01-5.993-1.61L.057 24z"/>
        <path d="M17.524 14.562c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.614-.916-2.21-.242-.58-.487-.501-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.48 0 1.465 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.718 2.006-1.41.248-.69.248-1.282.173-1.41-.074-.124-.272-.198-.57-.347z"/>
      </svg>
      Pedir por WhatsApp
    </a>
  )
}
