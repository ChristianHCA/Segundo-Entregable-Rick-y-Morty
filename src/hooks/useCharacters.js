import { useState, useEffect, useCallback } from 'react';

const API_BASE = 'https://rickandmortyapi.com/api/character';

/**
 * Custom hook para obtener personajes de la API de Rick and Morty.
 * Soporta paginación, filtrado por especie y búsqueda por nombre.
 */
export function useCharacters({ page = 1, species = '', name = '' } = {}) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({ count: 0, pages: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());

      if (species) {
        params.append('species', species);
      }

      if (name) {
        params.append('name', name);
      }

      const url = `${API_BASE}?${params.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          setCharacters([]);
          setInfo({ count: 0, pages: 0 });
          setLoading(false);
          return;
        }
        throw new Error(`Error al obtener personajes: ${response.status}`);
      }

      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (err) {
      setError(err.message);
      setCharacters([]);
      setInfo({ count: 0, pages: 0 });
    } finally {
      setLoading(false);
    }
  }, [page, species, name]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, info, loading, error, refetch: fetchCharacters };
}

/**
  Custom hook para obtener un personaje individual por ID.
 */
export function useCharacterDetail(id) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/${id}`);

        if (!response.ok) {
          throw new Error(`Personaje no encontrado (${response.status})`);
        }

        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  return { character, loading, error };
}
