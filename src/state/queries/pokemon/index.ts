import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RQKEYS as pokemonKeys } from './const';
import type { PokemonListPayload } from './schema';
import { zPokemonListPayload } from './schema';

import { STALE } from '#/state/queries';

export * from '#/state/queries/pokemon/const';
export * from '#/state/queries/pokemon/schema';

export const usePokemonListQuery = (
  { offset, limit }: { offset: number; limit: number } = { offset: 0, limit: 10 },
  queryOptions: Omit<UseQueryOptions<PokemonListPayload>, 'queryKey'> = {},
) => {
  const { data, ...rest } = useQuery({
    queryKey: pokemonKeys.getPokemonList(offset, limit).queryKey,
    queryFn: async () => {
      const response = await axios.get('/v2/pokemon', {
        params: { offset, limit },
      });
      return zPokemonListPayload().parse(response);
    },
    staleTime: STALE.SECONDS.FIFTEEN,
    refetchOnWindowFocus: true,
    ...queryOptions,
  });

  return { data, ...rest };
};
