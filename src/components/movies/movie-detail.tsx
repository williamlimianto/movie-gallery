import Image from 'next/image';

import { MovieItem as MovieItemType } from '~/src/types/movies';
import { formatDate } from '~/src/utils/helpers/date';

interface IMovieDetailProps {
  itemData: MovieItemType;
}

const MovieDetail = (props: IMovieDetailProps) => {
  return (
    <div className="mx-auto md:px-6">
      <div className="md:flex">
        <div className="w-full h-64 md:w-1/2 lg:h-96">
          <div className="bg-movie-item-placeholder bg-center bg-contain relative h-full w-full object-cover md:rounded-md mx-auto">
            <Image
              className="md:rounded-md"
              src={props.itemData.image}
              alt={props.itemData.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto mt-3 md:ml-8 md:mt-0 px-2 md:px-0">
          <h3 className="font-bold uppercase text-xl">
            {props.itemData.title}
          </h3>
          <span className="font-hairline text-sm text-grey-darker mt-3">
            {formatDate(props.itemData.showTime)} &middot; {props.itemData.like}{' '}
            like(s)
          </span>
          <hr className="my-3" />
          <p className="text-sm text-justify">{props.itemData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
