import Image from 'next/image';
import Layout from '../components/Layout';
import { GetStaticProps, MovieDetail, MovieDetailProps, MovieTrailer } from '../type';
import { KEY, URI, URIIMAGE } from '../utils';
import Moment from "moment"
import { useState } from 'react';
import PopupTrailer from '../components/PopupTrailer';

export default function movieDetail(props: MovieDetailProps) {
  const { movie } = props;
  const externaImageLoader = ({ src }: { src: string }) => `${URIIMAGE}${src}`;
  const formatDate = Moment(movie.release_date).format("MMMM DD, YYYY");

  var hours = Math.trunc(movie.runtime / 60);
  var minutes = movie.runtime % 60;
  const [showDetail, setShowDetail] = useState<string | null>(null)
  
  let trailer = null
  //chek trailer
  if (movie.videos && movie.videos.results) {
    trailer = movie.videos.results.find((vid: MovieTrailer) => vid.name === "Official Trailer")
  }

  return (
    <Layout pageTitle={"Movie Detail"}>
      <div className="flex justify-center">
        <div className="relative flex grid items-center grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2">
          <div className="flex justify-center h-auto my-16">
            <Image
              className='rounded-lg h-1/2'
              loader={externaImageLoader}
              src={movie.poster_path}
              width={370}
              height={480}
              alt={movie.original_title}
            />
          </div>
          <div className="h-auto max-w-3xl mb-16 md:col-span-2">
            <h4 className='text-5xl font-bold text-white'>{movie.original_title}</h4>
            <ul className='flex flex-wrap'>
              <li className='m-3 text-lg text-white'>{formatDate}</li>
              {movie.genres.map((genres: any) => {
                return (
                  <li key={genres.id} className="m-3 text-lg text-white list-disc">{genres.name}</li>
                )
              })}
              <li className='m-3 text-lg text-white'>{hours + "h " + minutes + "m"}</li>
            </ul>
            <h4 className='m-3 text-lg italic text-white'>{movie.tagline}</h4>
            <div className="flex">
              <h3 className='m-2 text-lg font-bold text-white'>Overview</h3>
              {trailer ? (
                <PopupTrailer trailerMovie={trailer} showDetail={showDetail} setShowDetail={setShowDetail} />
              ) : null}
            </div>
            <p className='m-3 text-white text-md'>{movie.overview}</p>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${URI}/popular?api_key=${KEY}&language=en-US&page=1`)
  const data = await res.json();
  const dataMovie = data.results;

  const paths = dataMovie.map((movie: MovieDetail) => ({
    params: {
      id: `${movie.id}`,
    }
  }))
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;

  const res = await fetch(`${URI}/${id}?api_key=${KEY}&append_to_response=videos`)
  const movie = await res.json();

  return {
    props: {
      movie
    }
  }
}

