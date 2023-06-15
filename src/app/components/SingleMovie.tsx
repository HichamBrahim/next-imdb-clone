import Image from "next/image";
import React from "react";
type Props = {
  movie: Movie;
};
function SingleMovie({ movie }: Props) {
  return (
    <>
      <div className="md:mx-24 flex flex-col md:flex-row items-center md:space-x-6 space-y-4">
        <div className="flex-1">
          <Image
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title}
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-medium">{movie.title}</h3>
          <p>{movie.overview}</p>
          <div>
            <b>Date Release: </b>
            {movie.release_date}
          </div>
          <div>
            <b>Rating: </b>
            {movie.vote_count}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;
