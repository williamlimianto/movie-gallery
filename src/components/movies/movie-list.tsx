import React from 'react';

import MovieItem from './movie-item';
import MovieListFilter from '~/src/components/movies/movie-list/movie-list-filter';
import Loading from '~/src/components/ui/loading';
import { MovieItem as MovieItemType } from '~/src/types/movies';
import { ApiError } from '~/src/utils/helpers/api';

interface IMovieListProps {
  showFilter?: boolean;
  listData: Array<MovieItemType>;
  errorData: ApiError;
}

const MovieList = (props: IMovieListProps) => {
  if (!props.errorData && props.listData.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      {props.showFilter ? <MovieListFilter /> : null}

      {(() => {
        if (props.errorData && props.errorData.status) {
          return (
            <div className="flex h-screen -mt-20 items-center justify-center">
              <div className="text-center">
                <p>No results found</p>
                <p className="text-sm mt-2">
                  Try different keywords or remove search filters
                </p>
              </div>
            </div>
          );
        }
        return null;
      })()}
      <div className="flex flex-wrap">
        {(() => {
          return props.listData.map((movieItem: MovieItemType) => (
            <MovieItem key={movieItem.id} itemData={movieItem} />
          ));
        })()}
      </div>
    </div>
  );
};

export default MovieList;
