import moment from 'moment';
import type { NextApiRequest, NextApiResponse } from 'next';

import { MovieListFilter as MovieListFilterEnum } from '~/src/types/movies/index';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { search_query, filter_by } = req.query;

  const responseAPI = await fetch(
    'https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies'
  );

  const moviesListData = await responseAPI.json();
  let filteredMoviesListData = moviesListData.filter((movie: any) => {
    if (!search_query) return false;
    return movie.title.toLowerCase().includes(search_query);
  });

  // THIS CODE ONLY FROM DEMO PURPOSES
  // NEVER EVER MUTATE RESPONSE DATA FROM API
  // ASK BACKEND INSTEAD.
  if (filter_by) {
    filteredMoviesListData = filteredMoviesListData.filter((movie: any) => {
      const movieShowTime = moment(movie.showTime);
      let startRangeFilterTime = moment(movieShowTime);

      switch (filter_by) {
        case MovieListFilterEnum.LastHour:
          startRangeFilterTime = moment().subtract(60, 'minutes');
          break;
        case MovieListFilterEnum.Today:
          startRangeFilterTime = moment().startOf('days');
          break;
        case MovieListFilterEnum.ThisWeek:
          startRangeFilterTime = moment().startOf('weeks');
          break;
        case MovieListFilterEnum.ThisMonth:
          startRangeFilterTime = moment().startOf('months');
          break;
        case MovieListFilterEnum.ThisYear:
          startRangeFilterTime = moment().startOf('years');
          break;
        case MovieListFilterEnum.LastYear:
          startRangeFilterTime = moment().subtract(1, 'years').startOf('years');
          break;
        case MovieListFilterEnum.LastTwoYears:
          startRangeFilterTime = moment().subtract(2, 'years').startOf('years');
          break;
        default:
          break;
      }

      return (
        movieShowTime.isAfter(startRangeFilterTime) ||
        movieShowTime.isSame(startRangeFilterTime)
      );
    });
  }

  if (filteredMoviesListData && filteredMoviesListData.length === 0) {
    res.status(404).json({ message: 'Data not Found' });
  } else {
    res.status(responseAPI.status).json(filteredMoviesListData);
  }
}
