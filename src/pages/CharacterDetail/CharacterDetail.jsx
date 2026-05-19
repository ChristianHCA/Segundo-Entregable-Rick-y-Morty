import { useParams, Link } from 'react-router-dom';
import { useCharacterDetail } from '../../hooks/useCharacters';
import Loading from '../../components/Loading/Loading';
import './CharacterDetail.css';

/**
 * Página de detalle individual de un personaje.
 */
export default function CharacterDetail() {
  const { id } = useParams();
  const { character, loading, error } = useCharacterDetail(id);

  if (loading) return <main className="detail-page"><Loading /></main>;

  if (error) {
    return (
      <main className="detail-page">
        <div className="detail-page__error container">
          <span>⚠️</span>
          <h2>Error</h2>
          <p>{error}</p>
          <Link to="/" className="detail-page__back-btn">Volver al inicio</Link>
        </div>
      </main>
    );
  }

  if (!character) return null;

  const { name, status, species, type, gender, origin, location, image, episode, created } = character;

  const statusClass = status === 'Alive' ? 'alive' : status === 'Dead' ? 'dead' : 'unknown';
  const statusLabel = status === 'Alive' ? 'Vivo' : status === 'Dead' ? 'Muerto' : 'Desconocido';
  const genderLabel = gender === 'Male' ? 'Masculino' : gender === 'Female' ? 'Femenino' : gender === 'Genderless' ? 'Sin género' : 'Desconocido';

  return (
    <main className="detail-page">
      <div className="container">
        <Link to="/" className="detail-page__back" id="detail-back">
          ← Volver a personajes
        </Link>

        <div className="detail-page__card" id="detail-card">
          <div className="detail-page__image-section">
            <div className="detail-page__image-wrapper">
              <img src={image} alt={name} className="detail-page__image" />
              <div className={`detail-page__status detail-page__status--${statusClass}`}>
                <span className="detail-page__status-dot"></span>
                {statusLabel}
              </div>
            </div>
          </div>

          <div className="detail-page__info-section">
            <h1 className="detail-page__name">{name}</h1>

            <div className="detail-page__details">
              <div className="detail-page__detail-item">
                <span className="detail-page__detail-icon">🧬</span>
                <div>
                  <span className="detail-page__detail-label">Especie</span>
                  <span className="detail-page__detail-value">{species}</span>
                </div>
              </div>

              {type && (
                <div className="detail-page__detail-item">
                  <span className="detail-page__detail-icon">🏷️</span>
                  <div>
                    <span className="detail-page__detail-label">Tipo</span>
                    <span className="detail-page__detail-value">{type}</span>
                  </div>
                </div>
              )}

              <div className="detail-page__detail-item">
                <span className="detail-page__detail-icon">⚧️</span>
                <div>
                  <span className="detail-page__detail-label">Género</span>
                  <span className="detail-page__detail-value">{genderLabel}</span>
                </div>
              </div>

              <div className="detail-page__detail-item">
                <span className="detail-page__detail-icon">🌍</span>
                <div>
                  <span className="detail-page__detail-label">Origen</span>
                  <span className="detail-page__detail-value">{origin.name}</span>
                </div>
              </div>

              <div className="detail-page__detail-item">
                <span className="detail-page__detail-icon">📍</span>
                <div>
                  <span className="detail-page__detail-label">Ubicación</span>
                  <span className="detail-page__detail-value">{location.name}</span>
                </div>
              </div>

              <div className="detail-page__detail-item">
                <span className="detail-page__detail-icon">🎬</span>
                <div>
                  <span className="detail-page__detail-label">Episodios</span>
                  <span className="detail-page__detail-value">{episode.length} episodio{episode.length !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
