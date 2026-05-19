import { Link } from 'react-router-dom';
import './ErrorPage.css';

/**
 * Página de error 404 / ruta no encontrada.
 */
export default function ErrorPage() {
  return (
    <main className="error-page" id="error-page">
      <div className="error-page__content">
        <div className="error-page__portal"></div>
        <h1 className="error-page__code">404</h1>
        <h2 className="error-page__title">Dimensión no encontrada</h2>
        <p className="error-page__message">
          Parece que te has perdido en el multiverso. Esta dimensión no existe.
        </p>
        <Link to="/" className="error-page__btn" id="error-back-home">
          🏠 Volver al inicio
        </Link>
      </div>
    </main>
  );
}
