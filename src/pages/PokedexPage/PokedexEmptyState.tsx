import { Card, CardContent } from '@/components/ui/card';

const PokedexEmptyState = () => (
  <div className="mx-auto max-w-6xl px-4 py-8 text-center">
    <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
      My Pokédex
    </h1>
    <Card>
      <CardContent>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          No Pokémon caught yet!
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Go to the main list and start catching some Pokémon.
        </p>
      </CardContent>
    </Card>
  </div>
);

export default PokedexEmptyState;
