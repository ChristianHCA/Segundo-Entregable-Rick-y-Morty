import { Link } from 'react-router-dom';
import './CharacterCard.css';

/**
 * Componente de tarjeta para mostrar información de un personaje.
 * Muestra imagen, nombre, especie, estado y género.
 */
export default function CharacterCard({ character }) {
  const { id, name, species, status, gender, image } = character;

  const statusClass = status === 'Alive'
    ? 'alive'
    : status === 'Dead'
      ? 'dead'
      : 'unknown';

  const statusLabel = status === 'Alive'
    ? 'Vivo'
    : status === 'Dead'
      ? 'Muerto'
      : 'Desconocido';

  const genderLabel = gender === 'Male'
    ? 'Masculino'
    : gender === 'Female'
      ? 'Femenino'
      : gender === 'Genderless'
        ? 'Sin género'
        : 'Desconocido';

  return (
    <Link to={`/character/${id}`} className="character-card" id={`character-card-${id}`}>
      <div className="character-card__image-wrapper">
        <img
          src={image}
          alt={`Imagen de ${name}`}
          className="character-card__image"
          loading="lazy"
        />
        <div className={`character-card__status-badge character-card__status-badge--${statusClass}`}>
          <span className="character-card__status-dot"></span>
          {statusLabel}
        </div>
      </div>

      <div className="character-card__content">
        <h3 className="character-card__name">{name}</h3>

        <div className="character-card__info">
          <div className="character-card__info-item">
            <span className="character-card__label">Especie</span>
            <span className="character-card__value">{species}</span>
          </div>
          <div className="character-card__info-item">
            <span className="character-card__label">Género</span>
            <span className="character-card__value">{genderLabel}</span>
          </div>
        </div>

        <span className="character-card__cta">
          Ver detalles →
        </span>
      </div>
    </Link>
  );
}
