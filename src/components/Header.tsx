import { NavLink, Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">Arte Berakah 365</Link>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
          <NavLink to="/fundacion">Fundación</NavLink>
          <NavLink to="/testimonios">Testimonios</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}
