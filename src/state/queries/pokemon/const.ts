import { createQueryKeys, inferQueryKeys } from '@lukemorales/query-key-factory';

export const RQKEYS = createQueryKeys('pokemonService', {
  getPokemonList: (offset?: number, limit?: number) => [offset, limit],
});

export type PokemonKeys = inferQueryKeys<typeof RQKEYS>;
