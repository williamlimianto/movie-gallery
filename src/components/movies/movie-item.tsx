import Image from 'next/image';
import Link from 'next/link';

import { MovieItem as MovieItemType } from '~/src/types/movies';
import { formatDate } from '~/src/utils/helpers/date';

interface IMovieItemProps {
  itemData: MovieItemType;
}

const MovieItem = (props: IMovieItemProps) => {
  return (
    <Link href={`/movie-detail/${props.itemData.id}`}>
      <a className="flex-shrink w-full md:w-1/2 lg:w-1/4 md:mb-4 pb-4 md:px-1 md:pt-1 md:pb-6 border-transparent rounded-md md:border active:bg-gray-200 active:border-gray-300">
        <div className="bg-movie-item-placeholder bg-center bg-contain relative w-full h-screen max-h-80 md:max-h-44">
          <Image
            src={props.itemData.image}
            alt={props.itemData.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-1 px-2 md:px-0">
          <h4 className="text-sm font-bold">{props.itemData.title}</h4>
          <p className="mt-1 font-hairline text-xs text-grey-darker">
            {formatDate(props.itemData.showTime)} &middot; {props.itemData.like}{' '}
            like(s)
          </p>
        </div>
      </a>
    </Link>
  );
};

export default MovieItem;
