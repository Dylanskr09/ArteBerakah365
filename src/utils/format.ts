export const money = (n: number, currency = 'COP') =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency, maximumFractionDigits: 0 }).format(n)

export const waLink = (phone: string, text: string) => {
  const digits = phone.replace(/[^\d]/g, '') // limpia +, espacios, guiones
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
}
