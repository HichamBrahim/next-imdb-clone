import SingleMovie from "@/app/components/SingleMovie";
import { getSingleMovieData } from "@/app/lib/getSingleMovieData";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    movieId: string;
  };
};

export async function generateMetadata({ params: { movieId } }: Props) {
  const singleMovieData: Promise<Movie> = getSingleMovieData(movieId);
  const movie = await singleMovieData;
  return {
    title: `imdb movie ${movie.title}`,
  };
}

async function movieDetails({ params: { movieId } }: Props) {
  const singleMovieData: Promise<Movie> = getSingleMovieData(movieId);
  const movie = await singleMovieData;
  if (!movie.title) {
    return notFound();
  }
  return (
    <main>
      <section className="p-4">
        <SingleMovie movie={movie} />
      </section>
    </main>
  );
}

export default movieDetails;
