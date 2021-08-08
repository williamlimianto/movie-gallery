import React, { useState } from 'react';

import { useRouter } from 'next/router';

import MovieListFilterItem from '~/src/components/movies/movie-list/movie-list-filter-item';
import { MovieListFilter as MovieListFilterEnum } from '~/src/types/movies/index';

const MovieListFilter = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowFilterMenu(!showFilterMenu);
  };

  const handleFilterItemClick = (event: any) => {
    event.preventDefault();
    setShowFilterMenu(!showFilterMenu);
  };

  const getFilterListItemLink = (filterValue: string) => {
    const newParams: any = { ...query };
    if (filterValue) {
      newParams.filter_by = filterValue;
    } else {
      delete newParams.filter_by;
    }

    const queryString = Object.keys(newParams)
      .map((key) => `${key}=${newParams[key]}`)
      .join('&');

    return pathname + (queryString ? `?${queryString}` : '');
  };

  return (
    <div>
      <div className="border-b border-gray-400 mb-5 md:-mt-3">
        <div className="relative">
          <button
            onClick={handleClick}
            type="button"
            className={`relative block p-3 w-22 z-10 rounded font-medium bg-transparent hover:bg-transparent focus:outline-none focus:bg-transparent ${
              query.filter_by ? 'text-blue-400' : 'text-gray-700'
            }`}
          >
            <span className="flex items-center justify-center">
              <span className="block font-semibold text-sm uppercase mr-2">
                Filter
              </span>
              <span className="block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </button>

          {(() => {
            return showFilterMenu ? (
              // eslint-disable-next-line jsx-a11y/interactive-supports-focus
              <div
                role="button"
                onClick={handleFilterItemClick}
                onKeyDown={handleFilterItemClick}
                className="absolute left-0 mt-2 w-48 text-left bg-white border rounded-md overflow-hidden shadow-xl z-20"
              >
                <MovieListFilterItem
                  link={getFilterListItemLink('')}
                  text="Any"
                />
                <MovieListFilterItem
                  link={getFilterListItemLink(MovieListFilterEnum.LastHour)}
                  text="Last hour"
                  selected={query.filter_by === MovieListFilterEnum.LastHour}
                />
                <MovieListFilterItem
                  link={getFilterListItemLink(MovieListFilterEnum.Today)}
                  text="Today"
                  selected={query.filter_by === MovieListFilterEnum.Today}
                />
                <MovieListFilterItem
                  link={getFilterListItemLink(MovieListFilterEnum.ThisWeek)}
                  text="This week"
                  selected={query.filter_by === MovieListFilterEnum.ThisWeek}
                />
                <MovieListFilterItem
                  link={getFilterListItemLink(MovieListFilterEnum.ThisMonth)}
                  text="This month"
                  selected={query.filter_by === MovieListFilterEnum.ThisMonth}
                />
                <MovieListFilterItem
                  link={getFilterListItemLink(MovieListFilterEnum.ThisYear)}
                  text="This year"
                  selected={query.filter_by === MovieListFilterEnum.ThisYear}
                />
                <MovieListFilterItem
                  link={getFilterListItemLink(MovieListFilterEnum.LastYear)}
                  text="Last year (demo)"
                  selected={query.filter_by === MovieListFilterEnum.LastYear}
                />
                <MovieListFilterItem
                  link={getFilterListItemLink(MovieListFilterEnum.LastTwoYears)}
                  text="Last two years (demo)"
                  selected={
                    query.filter_by === MovieListFilterEnum.LastTwoYears
                  }
                />
              </div>
            ) : null;
          })()}
        </div>
      </div>
    </div>
  );
};

export default MovieListFilter;
