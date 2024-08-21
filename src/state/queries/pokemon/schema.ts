import { z } from 'zod';

const zResult = () =>
  z.object({
    name: z.string(),
    url: z.string(),
  });
export type Result = z.infer<ReturnType<typeof zResult>>;

export const zPokemonListPayload = () =>
  z.object({
    count: z.number(),
    next: z.string().nullable(),
    previous: z.string().nullable(),
    results: z.array(zResult()),
  });
export type PokemonListPayload = z.infer<ReturnType<typeof zPokemonListPayload>>;
