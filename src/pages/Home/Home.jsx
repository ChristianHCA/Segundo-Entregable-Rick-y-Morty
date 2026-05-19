import { useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';
import './Home.css';

/**
 * Página principal: muestra todos los personajes con paginación y búsqueda.
 */
export default function Home() {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const { characters, info, loading, error } = useCharacters({
    page,
    name: searchName,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchName(searchInput);
    setPage(1);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearchName('');
    setPage(1);
  };

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="home__hero" id="home-hero">
        <div className="home__hero-bg">
          <div className="home__hero-orb home__hero-orb--1"></div>
          <div className="home__hero-orb home__hero-orb--2"></div>
          <div className="home__hero-orb home__hero-orb--3"></div>
        </div>
        <div className="container">
          <h1 className="home__title">
            <span>Explora el </span>
            <span className="home__title-highlight">Multiverso</span>
          </h1>
          <p className="home__subtitle">
            Descubre todos los personajes de Rick and Morty a través de las dimensiones
          </p>

          {/* Buscador */}
          <form className="home__search" onSubmit={handleSearch} id="search-form">
            <div className="home__search-wrapper">
              <span className="home__search-icon">🔍</span>
              <input
                type="text"
                className="home__search-input"
                placeholder="Buscar personaje por nombre..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                id="search-input"
              />
              {searchInput && (
                <button
                  type="button"
                  className="home__search-clear"
                  onClick={handleClearSearch}
                  aria-label="Limpiar búsqueda"
                  id="search-clear"
                >
                  ✕
                </button>
              )}
            </div>
            <button type="submit" className="home__search-btn" id="search-submit">
              Buscar
            </button>
          </form>

          {info.count > 0 && (
            <p className="home__results-count">
              {info.count} personaje{info.count !== 1 ? 's' : ''} encontrado{info.count !== 1 ? 's' : ''}
              {searchName && <> para "<strong>{searchName}</strong>"</>}
            </p>
          )}
        </div>
      </section>

      {/* Characters Grid */}
      <section className="home__characters container" id="characters-section">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="home__error" id="home-error">
            <span className="home__error-icon">⚠️</span>
            <h2>Error al cargar personajes</h2>
            <p>{error}</p>
          </div>
        ) : characters.length === 0 ? (
          <div className="home__empty" id="home-empty">
            <span className="home__empty-icon">🛸</span>
            <h2>No se encontraron personajes</h2>
            <p>Intenta con otro término de búsqueda</p>
            {searchName && (
              <button className="home__empty-btn" onClick={handleClearSearch}>
                Mostrar todos
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="home__grid">
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
    </main>
  );
}
