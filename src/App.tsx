import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from '@/components/Layout/Header';
import PokedexPage from '@/pages/PokedexPage';
import PokemonDetailsPage from '@/pages/PokemonDetailsPage';
import PokemonListPage from '@/pages/PokemonListPage';
import useAllPokemons from '@/hooks/useAllPokemons';

const App: React.FC = () => {
  useAllPokemons();

  return (
    <div className="bg-background text-foreground">
      <Header />
      <Routes>
        <Route path="/" Component={PokemonListPage} />
        <Route path="/my-pokedex" Component={PokedexPage} />
        <Route path="/pokemon/:id" Component={PokemonDetailsPage} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
