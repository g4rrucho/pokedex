import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import usePokemonList from '@/hooks/usePokemonList';
import PokemonListCards from '@/components/PokemonList/PokemonListCards';
import PokemonListTable from '@/components/PokemonList/PokemonListTable';
import PaginationControl from '@/components/PokemonList/PaginationControl';
import PokemonInput from '@/pages/PokemonListPage/PokemonInput';

const PokemonListPage: React.FC = () => {
  const limit = 10;
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get('search') || ''
  );

  const setSearchParam = (value: string) => {
    setSearchParams({ search: value, page: '1' });
    setSearch(value);
  };

  const {
    pokemons,
    isLoading,
    isError,
    totalPages,
    hasNext,
    hasPrevious,
    currentPage,
  } = usePokemonList(limit);

  const handlePageChange = (newPage: number) => {
    const params: Record<string, string> = { page: newPage.toString() };
    if (search) params.search = search;
    setSearchParams(params);
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
      <PokemonInput input={search} setInput={setSearchParam} />
      <div className="lg:hidden">
        <PokemonListCards
          limit={limit}
          isError={isError}
          isLoading={isLoading}
          pokemons={pokemons?.results || []}
        />
      </div>
      <div className="hidden lg:block">
        <PokemonListTable
          limit={limit}
          isError={isError}
          isLoading={isLoading}
          pokemons={pokemons?.results || []}
        />
      </div>
      <PaginationControl
        isVisible={!isLoading || isError || !!pokemons}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalCount={pokemons?.count || 0}
        totalPages={totalPages}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        limit={limit}
      />
    </div>
  );
};

export default PokemonListPage;
