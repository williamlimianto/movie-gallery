import React from 'react';

import Link from 'next/link';

interface IMovieListFilterItemProps {
  text: string;
  link: string;
  selected?: boolean;
}

const MovieListFilterItem = (props: IMovieListFilterItemProps) => {
  return (
    <Link href={props.link}>
      <a
        className={`block px-4 py-2 text-sm border-b hover:bg-gray-200 ${
          props.selected ? 'font-medium text-blue-400' : 'text-gray-800'
        }`}
      >
        {props.text}
      </a>
    </Link>
  );
};

export default MovieListFilterItem;
