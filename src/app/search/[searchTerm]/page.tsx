import Results from "@/app/components/Results";
import { getSearchMoviesData } from "@/app/lib/getSearchMoviesData";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    searchTerm: string;
  };
};
export function generateMetadata({ params: { searchTerm } }: Props): {
  title: string;
} {
  return {
    title: `imdb Search ${searchTerm}`,
  };
}

async function SearchMovie({ params: { searchTerm } }: Props) {
  const searchMovieData: Promise<movieDataType> =
    getSearchMoviesData(searchTerm);
  const searchMovie = await searchMovieData;
  if (searchMovie.results.length === 0) {
    return notFound();
  }
  return (
    <main>
      <section>
        <Results results={searchMovie.results} />
      </section>
    </main>
  );
}

export default SearchMovie;
