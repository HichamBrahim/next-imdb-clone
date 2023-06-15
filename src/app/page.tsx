import React from "react";
import Results from "./components/Results";
import { getMoviesData } from "./lib/getMoviesData";

export const metadata = {
  title: "imdb",
  description: "imdb app for movies",
};

type Props = {
  searchParams: {
    option: string;
  };
};

async function Home({ searchParams: { option } }: Props) {
  console.log(option);

  const genre = option || "fetchTrending";
  const movieData: Promise<movieDataType> = getMoviesData(genre);
  const allMovies = await movieData;
  return (
    <main>
      <section className="p-4">
        <Results results={allMovies.results} />
      </section>
    </main>
  );
}

export default Home;
