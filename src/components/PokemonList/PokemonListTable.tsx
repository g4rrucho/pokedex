import React from 'react';
import { Table, TableBody } from '@/components/ui/table';

import { TPokemonListItem } from '@/types';
import PokemonListTableRow from '@/components/PokemonList/PokemonListTableRow';
import PokemonTableRowSkeleton from '@/components/PokemonUI/PokemonTable/PokemonTableRowSkeleton';
import PokemonTableHeaders from '@/components/PokemonUI/PokemonTable/PokemonTableHeaders';
import { Card, CardContent } from '@/components/ui/card';

type TPokemonListTableProps = {
  isLoading: boolean;
  isError: boolean;
  limit: number;
  pokemons: TPokemonListItem[];
};

const PokemonListTable: React.FC<TPokemonListTableProps> = ({
  isError,
  isLoading,
  limit,
  pokemons,
}) => {
  if (isError)
    return (
      <Card>
        <CardContent>
          <p className="text-destructive">Error loading Pokémon list</p>
        </CardContent>
      </Card>
    );

  return (
    <div className="rounded-md border">
      <Table className="table-fixed">
        <PokemonTableHeaders />
        <TableBody>
          {isLoading
            ? Array.from({ length: limit }).map((_, index) => (
                <PokemonTableRowSkeleton key={index} />
              ))
            : pokemons.map((pokemon) => (
                <PokemonListTableRow key={pokemon.name} pokemon={pokemon} />
              ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PokemonListTable;
