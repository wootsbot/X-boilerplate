'use client';

import { useQueryState, parseAsInteger } from 'nuqs';
import { useDebounce } from '@uidotdev/usehooks';

import { useRepositoriesQuery } from '@/state/queries/github';
import * as Repository from './repositories-list';

export default function QueryV5Page() {
  const [queryField, setQueryField] = useQueryState('q');
  const [page, setPage] = useQueryState('p', parseAsInteger.withDefault(1));

  const debouncedSearch = useDebounce(queryField || '', 300);

  const {
    data: repositories,
    error,
    isLoading,
  } = useRepositoriesQuery(
    {
      search: debouncedSearch,
      perPage: 10,
      page,
    },
    {
      enabled: debouncedSearch.trim() !== '',
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryField(e.target.value || null);
    setPage(1);
  };

  const totalResults = repositories ? Math.min(repositories.totalCount, 1000) : 0;
  const totalPages = Math.ceil(totalResults / page);

  return (
    <div>
      <div className="max-w-2xl px-4 mx-4 sm:mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="font-mono text-2xl">
            Explore public <sup className="font-mono text-2xl text-stone-400">repositories</sup>. Search, filter, and
            sort by owner, repository name, programming language, number of stars, or creation date.
          </h2>

          <div className="bg-[#f2f0ed] shadow-md outline outline-stone-400 outline-[0.5px] px-3 flex items-center">
            <svg
              className="stroke-stone-400"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>

            <input
              className="w-full h-full px-3 py-5 font-mono text-sm font-normal bg-transparent rounded-sm outline-none placeholder:font-mono placeholder:text-stone-400"
              type="text"
              placeholder="Search for a name"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl px-4 mx-4 mt-10 sm:mx-auto">
        {error && <div>Error: {error.message}</div>}

        <div className="mb-4">
          <p className="text-md text-stone-500">
            {repositories?.totalCount} result{repositories?.totalCount !== 1 ? 's' : ''} found
          </p>

          <p className="text-md text-stone-500">
            Showing {totalResults.toLocaleString()} of {repositories?.totalCount.toLocaleString()} results due to API
            limitations.
          </p>
        </div>

        {isLoading && <Repository.Loader />}

        {repositories && repositories.items?.length > 0 && <Repository.RepositoriesList items={repositories.items} />}

        {totalPages > 0 && (
          <div className="flex items-center justify-center mt-4 pagination">
            <button
              className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => setPage(Math.max(page - 1, 1))}
              disabled={page === 1}
            >
              Anterior
            </button>

            <span className="mx-2">
              Página {page} de {totalPages}
            </span>

            <button
              className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => setPage(Math.min(page + 1, totalPages))}
              disabled={page === totalPages}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
