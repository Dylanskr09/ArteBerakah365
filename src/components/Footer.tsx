export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Arte Berakah 365 · Hecho con ♥</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="https://instagram.com" target="_blank" className="underline">Instagram</a>
          <a href="https://facebook.com" target="_blank" className="underline">Facebook</a>
          <a href="mailto:hola@arteberakah365.com" className="underline">Email</a>
        </div>
      </div>
    </footer>
  )
}
