import { createQueryKeys, type inferQueryKeys } from "@lukemorales/query-key-factory";

export const RQKEYS = createQueryKeys("githubService", {
	searchRepositories: (search: string, perPage?: number, page?: number) => [search, perPage, page],
});

export type GithubKeys = inferQueryKeys<typeof RQKEYS>;
