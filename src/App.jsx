import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import FilterBySpecies from './pages/FilterBySpecies/FilterBySpecies';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import './App.css';

/**
 * Componente principal de la aplicación.
 * Define las rutas y el layout general.
 */
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<FilterBySpecies />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer className="app__footer">
        <div className="container">
          <p className="app__footer-text">
            Rick and Morty Explorer — Datos de{' '}
            <a
              href="https://rickandmortyapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="app__footer-link"
            >
              rickandmortyapi.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
