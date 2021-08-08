import React from 'react';

import useSWR from 'swr';

import MovieList from '~/src/components/movies/movie-list';
import { Meta } from '~/src/layout/Meta';
import { Main } from '~/src/templates/Main';
import { AppConfig } from '~/src/utils/configs/app-config';
import { fetcher } from '~/src/utils/helpers/api';

const IndexPage = () => {
  const { data, error } = useSWR(`/api/movies/list`, fetcher);

  return (
    <Main
      meta={
        <Meta title={AppConfig.site_name} description={AppConfig.description} />
      }
    >
      <MovieList listData={data || []} errorData={error} />
    </Main>
  );
};

export default IndexPage;
