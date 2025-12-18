import React from 'react';

import PokeBall from '@/assets/pokeball.png';

import { TPokemon } from '@/types';
import { Button } from '@/components/ui/button';
import ShareButton from '@/components/ShareButton';
import PokemonTypeBadge, { PokemonType } from '@/components/PokemonTypeBadge';

type TPokemonHeaderProps = {
  pokemon: TPokemon;
  onToggleCatch?: () => void;
  isCaught?: boolean;
  isShared: boolean;
};

const PokemonDetailsCardHeader: React.FC<TPokemonHeaderProps> = ({
  pokemon,
  onToggleCatch,
  isCaught,
  isShared,
}) => {
  const { id, name, sprites, types } = pokemon;

  return (
    <div className="mb-8 flex flex-col items-center gap-2 sm:gap-8 md:flex-row md:gap-2">
      {/* Pokemon Image */}
      <div className="flex-shrink-0">
        {sprites?.front_default && (
          <img
            src={sprites.front_default}
            alt={name}
            className="h-24 w-24 object-contain sm:h-48 sm:w-48"
          />
        )}
      </div>

      {/* Basic Info */}
      <div className="text-center">
        <div className="full-w flex items-center justify-center gap-4">
          <h1 className="mb-2 text-4xl font-bold capitalize">{name}</h1>
          {isCaught && (
            <img className="h-8 w-8 object-contain" src={PokeBall} />
          )}
        </div>
        <p className="mb-4 text-xl text-gray-600 md:text-left dark:text-gray-200">
          #{id.toString().padStart(3, '0')}
        </p>

        {/* Types */}
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {types.map(({ type, slot }) => (
            <PokemonTypeBadge
              key={`${slot}-${type.name}`}
              type={type.name as PokemonType}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 md:ml-auto lg:flex-row">
        <Button
          variant={isCaught ? 'destructive' : 'default'}
          onClick={onToggleCatch}
        >
          {isCaught ? `Release ${name}` : `Catch ${name}`}
        </Button>
        {!isShared && <ShareButton pokemonId={id} />}
      </div>
    </div>
  );
};

export default PokemonDetailsCardHeader;
