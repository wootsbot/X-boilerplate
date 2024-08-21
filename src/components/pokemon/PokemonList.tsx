'use client';

import { usePokemonListQuery } from '#/state/queries/pokemon';

export function PokemonList() {
  const { data, isLoading, error } = usePokemonListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>{data?.results?.map((pokemon) => <li key={pokemon.url}>{pokemon.name}</li>)}</ul>
    </div>
  );
}
