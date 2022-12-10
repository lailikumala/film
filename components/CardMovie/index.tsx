import Image from 'next/image';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Movie } from '../../type';
import { URIIMAGE } from '../../utils';
import Moment from 'moment';

const CardMovie: FunctionComponent<{ dataMovie: Movie }> = ({
  dataMovie: { id, original_title, poster_path, release_date, vote_average }
}) => {

  const externaImageLoader = ({ src }: { src: string }) => `${URIIMAGE}${src}`;
  const router = useRouter();
  const date = Moment(release_date).format('MMMM DD, YYYY');

  return (
    <div className="relative inline-block w-48 px-4 py-2 m-4 cursor-pointer"
      key={id} onClick={() => router.push(`/${id}`)}>
      <Image
        className="rounded-md"
        loader={externaImageLoader}
        src={poster_path}
        width={200}
        height={225}
        alt={original_title}
      />
      {vote_average ? <span className="absolute p-2 text-xs text-white right-6 top-4 rounded-r-3xl rounded-l-3xl bg-dark-500 ring-offset-2 ring-2 ring-blue-300">{vote_average}</span> : null}
      <h3 className="text-center text-white font-md">{original_title}</h3>
      <p className="text-center text-white font-md">{date}</p>
    </div>
  )
}

export default CardMovie