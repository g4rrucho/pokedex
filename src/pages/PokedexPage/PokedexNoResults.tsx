const PokedexNoResults = () => (
  <div className="py-12 text-center">
    <p className="text-lg text-gray-600 dark:text-gray-200">
      No Pokémon match your current filters.
    </p>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
      Try adjusting your search or filter criteria.
    </p>
  </div>
);

export default PokedexNoResults;
