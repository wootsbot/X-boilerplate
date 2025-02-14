import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { RQKEYS as gitHubKeys } from "./const";
import type { RepositoriesPayload, SearchRepositoriesParams } from "./schema";
import { zRepositoriesPayload } from "./schema";

import { STALE } from "#/state/queries";

export * from "#/state/queries/github/const";
export * from "#/state/queries/github/schema";

export const useRepositoriesQuery = (
	{ search, perPage, page }: SearchRepositoriesParams = { search: "", perPage: 10, page: 1 },
	queryOptions: Omit<UseQueryOptions<RepositoriesPayload>, "queryKey"> = {},
) => {
	const { data, ...rest } = useQuery({
		queryKey: gitHubKeys.searchRepositories(search, page).queryKey,
		queryFn: async () => {
			const response = await axios.get("https://api.github.com/search/repositories", {
				params: { q: search, per_page: perPage, page },
				headers: {
					Authorization: `Bearer ${process.env.PERSONAL_GITHUB_TOKEN}`,
				},
			});

			return zRepositoriesPayload().parse(response);
		},
		staleTime: STALE.SECONDS.FIFTEEN,
		...queryOptions,
	});

	return { data, ...rest };
};
