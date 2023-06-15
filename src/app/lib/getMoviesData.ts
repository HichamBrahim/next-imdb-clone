const api_key = process.env.API_KEY;

export async function getMoviesData(genre: string) {
    const res = await fetch( `https://api.themoviedb.org/3/${
        genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${api_key}&language=en-US&page=1`, {next: {revalidate: 10000}});

    const data = await res.json();

      return new Promise<movieDataType>((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
  });
   
}