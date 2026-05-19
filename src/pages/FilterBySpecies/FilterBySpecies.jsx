import { useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';
import './FilterBySpecies.css';

const SPECIES_OPTIONS = [
  { value: '', label: 'Todas las especies', icon: '🌐' },
  { value: 'Human', label: 'Humano', icon: '👤' },
  { value: 'Alien', label: 'Alien', icon: '👽' },
  { value: 'Humanoid', label: 'Humanoide', icon: '🤖' },
  { value: 'Poopybutthole', label: 'Poopybutthole', icon: '💩' },
  { value: 'Mythological Creature', label: 'Criatura Mitológica', icon: '🐉' },
  { value: 'Animal', label: 'Animal', icon: '🐾' },
  { value: 'Robot', label: 'Robot', icon: '🦾' },
  { value: 'Cronenberg', label: 'Cronenberg', icon: '🧟' },
  { value: 'Disease', label: 'Enfermedad', icon: '🦠' },
  { value: 'unknown', label: 'Desconocido', icon: '❓' },
];

/**
 * Página de filtrado por especie.
 * Permite seleccionar una especie y visualizar los personajes correspondientes.
 */
export default function FilterBySpecies() {
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [page, setPage] = useState(1);

  const { characters, info, loading, error } = useCharacters({
    page,
    species: selectedSpecies,
  });

  const handleSpeciesChange = (species) => {
    setSelectedSpecies(species);
    setPage(1);
  };

  const currentOption = SPECIES_OPTIONS.find(
    (opt) => opt.value === selectedSpecies
  );

  return (
    <main className="filter-page">
      <div className="container">
        {/* Header */}
        <section className="filter-page__header" id="filter-header">
          <h1 className="filter-page__title">
            <span className="filter-page__title-icon">🔬</span>
            Filtrar por Especie
          </h1>
          <p className="filter-page__subtitle">
            Selecciona una especie para descubrir sus personajes en el multiverso
          </p>
        </section>

        {/* Species Buttons */}
        <section className="filter-page__species" id="species-buttons">
          <div className="filter-page__species-grid">
            {SPECIES_OPTIONS.map((option) => (
              <button
                key={option.value}
                className={`filter-page__species-btn ${
                  selectedSpecies === option.value
                    ? 'filter-page__species-btn--active'
                    : ''
                }`}
                onClick={() => handleSpeciesChange(option.value)}
                id={`species-btn-${option.value || 'all'}`}
              >
                <span className="filter-page__species-icon">{option.icon}</span>
                <span className="filter-page__species-label">{option.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Results info */}
        {currentOption && info.count > 0 && (
          <div className="filter-page__info">
            <span className="filter-page__info-badge">
              {currentOption.icon} {currentOption.label}
            </span>
            <span className="filter-page__info-count">
              {info.count} personaje{info.count !== 1 ? 's' : ''}
            </span>
          </div>
        )}

        {/* Characters Grid */}
        <section className="filter-page__characters" id="filtered-characters">
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="filter-page__error">
              <span className="filter-page__error-icon">⚠️</span>
              <h2>Error al cargar personajes</h2>
              <p>{error}</p>
            </div>
          ) : characters.length === 0 ? (
            <div className="filter-page__empty">
              <span className="filter-page__empty-icon">🛸</span>
              <h2>No se encontraron personajes</h2>
              <p>No hay personajes de esta especie disponibles</p>
              <button
                className="filter-page__empty-btn"
                onClick={() => handleSpeciesChange('')}
              >
                Ver todas las especies
              </button>
            </div>
          ) : (
            <>
              <div className="filter-page__grid">
                {characters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </div>
              <Pagination
                currentPage={page}
                totalPages={info.pages}
                onPageChange={(newPage) => {
                  setPage(newPage);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </>
          )}
        </section>
      </div>
    </main>
  );
}
