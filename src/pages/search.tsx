import { useRouter } from 'next/router';
import useSWR from 'swr';

import MovieList from '~/src/components/movies/movie-list';
import { Meta } from '~/src/layout/Meta';
import { Main } from '~/src/templates/Main';
import { AppConfig } from '~/src/utils/configs/app-config';
import { fetcher } from '~/src/utils/helpers/api';

const SearchPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { search_query = '', filter_by = '' } = router.query;
  const { data, error } = useSWR(
    `/api/movies/search?search_query=${search_query}&filter_by=${filter_by}`,
    fetcher
  );

  return (
    <Main
      meta={
        <Meta
          title={`${search_query ? `${search_query} - ` : ''}${
            AppConfig.site_name
          }`}
          description="Video Search Result"
        />
      }
    >
      <MovieList showFilter listData={data || []} errorData={error} />
    </Main>
  );
};

export default SearchPage;
