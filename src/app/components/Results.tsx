import React from "react";
import Card from "./Card";

type Props = {
  results: Movie[];
};

function Results({ results }: Props) {
  return (
    <div className="md:mx-24 grid grid-cols-auto gap-5">
      {results.map((movie: any) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export default Results;
