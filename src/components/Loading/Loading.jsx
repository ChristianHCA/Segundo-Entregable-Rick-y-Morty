import './Loading.css';

/**
 * Componente de carga animado con temática de portal.
 */
export default function Loading() {
  return (
    <div className="loading" id="loading-spinner">
      <div className="loading__portal">
        <div className="loading__ring loading__ring--outer"></div>
        <div className="loading__ring loading__ring--inner"></div>
        <div className="loading__center">🌀</div>
      </div>
      <p className="loading__text">Abriendo portal interdimensional...</p>
    </div>
  );
}
