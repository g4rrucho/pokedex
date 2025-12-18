import React, { memo } from 'react';

type TPokedexHeader = {
  totalCaught: number;
};

const PokedexHeader: React.FC<TPokedexHeader> = ({ totalCaught }) => {
  return (
    <div className="mb-6">
      <h1 className="mb-4 text-3xl font-bold">My Pokédex</h1>
      <p className="text-gray-600 dark:text-gray-200">
        You've caught {totalCaught} Pokémon
      </p>
    </div>
  );
};

export default memo(PokedexHeader);
