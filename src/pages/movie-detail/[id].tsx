import React from 'react';

import { GetServerSideProps } from 'next';

import MovieDetail from '~/src/components/movies/movie-detail';
import { Meta } from '~/src/layout/Meta';
import { getMovieDetailData } from '~/src/pages/api/movies/[id]';
import { Main } from '~/src/templates/Main';
import { MovieItem as MovieItemType } from '~/src/types/movies';

interface IMovieDetailPageProps {
  itemData: MovieItemType;
}

const MovieDetailPage = (props: IMovieDetailPageProps) => {
  return (
    <Main
      meta={
        <Meta title={props.itemData.title} description={props.itemData.title} />
      }
    >
      <MovieDetail itemData={props.itemData} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id = '' } = context.query;

  if (!id) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const res = await getMovieDetailData(id as string);
  const itemData = await res.json();

  if (res.status === 404) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  // THIS CODE ONLY FROM DEMO PURPOSES
  // NEVER EVER MUTATE RESPONSE DATA FROM API
  // ASK BACKEND INSTEAD.
  if (itemData.id) {
    itemData.description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
    adipisci, harum vitae minima deleniti iste nisi corporis incidunt
    a est eligendi beatae alias provident, quis dolores id mollitia
    quidem! Aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
    adipisci, harum vitae minima deleniti iste nisi corporis incidunt
    a est eligendi beatae alias provident, quis dolores id mollitia
    quidem! Aliquam!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
    adipisci, harum vitae minima deleniti iste nisi corporis incidunt
    a est eligendi beatae alias provident, quis dolores id mollitia
    quidem! Aliquam!`;
  }

  // Pass data to the page via props
  return { props: { itemData } };
};

export default MovieDetailPage;
