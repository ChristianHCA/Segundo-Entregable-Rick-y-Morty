import { NavLink } from 'react-router-dom';
import './Navbar.css';

/**
 * Componente de navegación principal.
 * Contiene el logo y enlaces a las rutas principales.
 */
export default function Navbar() {
  return (
    <nav className="navbar" id="navbar-main">
      <div className="navbar__container container">
        <NavLink to="/" className="navbar__logo" id="navbar-logo">
          
          <span className="navbar__logo-text">
            Rick <span className="navbar__logo-accent">&</span> Morty
          </span>
        </NavLink>

        <ul className="navbar__menu" id="navbar-menu">
          <li className="navbar__item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              id="nav-link-home"
            >
              <span className="navbar__link-icon">🏠</span>
              <span>Inicio</span>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/filter"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              id="nav-link-filter"
            >
              <span className="navbar__link-icon">🔬</span>
              <span>Filtrar por Especie</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
