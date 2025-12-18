import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import useAllPokemons from '@/hooks/useAllPokemons';
import usePokemons from '@/hooks/usePokemons';

const usePokemonList = (limit: number = 10) => {
  const [searchParams, _] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const searchQuery = searchParams.get('search') || '';

  const {
    data: paginatedPokemons,
    isLoading: paginatedLoading,
    isError: paginatedError,
  } = usePokemons(limit, (currentPage - 1) * limit);

  const {
    data: allPokemons,
    isLoading: allLoading,
    isError: allError,
  } = useAllPokemons();

  const filteredPaginatedPokemons = useMemo(() => {
    if (!allPokemons || !searchQuery.trim()) return null;

    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    const paginated = filtered.slice(startIndex, endIndex);

    return {
      results: paginated,
      count: filtered.length,
    };
  }, [allPokemons, searchQuery, currentPage, limit]);

  const isSearching = !!searchQuery.trim();
  const data = isSearching ? filteredPaginatedPokemons : paginatedPokemons;
  const isLoading = isSearching ? allLoading : paginatedLoading;
  const isError = isSearching ? allError : paginatedError;

  const totalPages = data ? Math.ceil(data.count / limit) : 0;
  const hasNext = isSearching
    ? currentPage < totalPages
    : !!paginatedPokemons?.next;
  const hasPrevious = isSearching
    ? currentPage > 1
    : !!paginatedPokemons?.previous;

  return {
    pokemons: data,
    isLoading,
    isError,
    totalPages,
    hasNext,
    hasPrevious,
    currentPage,
  };
};

export default usePokemonList;
