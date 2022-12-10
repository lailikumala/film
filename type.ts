import React from "react"

export interface Movie {
  id: number,
  original_title: string,
  release_date: string
  poster_path: string,
  vote_average: number
}

export interface MovieDetail {
  id: number,
  original_title: string,
  release_date: string
  poster_path: string,
  backdrop_path: string,
  overview: string,
  genres: string[],
  name: string,
  tagline: string,
  runtime: number,
  homepage: string,
  vote_average: number,
  videos: {
    results: any
  }
}

export interface MovieTrailer {
  official?: boolean,
  id?: string
  iso_639_1?: string,
  iso_3166_1?: string,
  name?: string,
  key?: string,
  site?: string,
  size?: number,
  type?: string,
  published_at?: string,
}

export interface HomeProps {
  dataMovie: Movie[],
  dataMovie2: Movie[]
}

export interface MovieDetailProps {
  movie: MovieDetail
}


export interface GetStaticProps {
  params: {
    id: string;
  }
}