import React from 'react';

import { TPokemonListItem } from '@/types';

import PokemonCardSkeleton from '@/components/PokemonUI/PokemonCardList/PokemonCardSkeleton';
import PokemonListItem from '@/components/PokemonList/PokemonListCard';
import { Card, CardContent } from '@/components/ui/card';

type TPokemonListCardsProps = {
  isLoading: boolean;
  isError: boolean;
  limit?: number;
  pokemons: TPokemonListItem[];
};

const PokemonListCards: React.FC<TPokemonListCardsProps> = ({
  isError,
  isLoading,
  limit = 20,
  pokemons,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {Array.from({ length: limit }).map((_, index) => (
          <PokemonCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError)
    return (
      <Card>
        <CardContent>
          <p className="text-destructive">Error loading Pokémon list</p>
        </CardContent>
      </Card>
    );

  if (!pokemons)
    return (
      <Card>
        <CardContent>
          <p className="text-accent-foreground">No Pokémon found</p>
        </CardContent>
      </Card>
    );

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
};

export default PokemonListCards;
