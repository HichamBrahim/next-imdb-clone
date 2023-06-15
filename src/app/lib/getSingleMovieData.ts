    const api_key = process.env.API_KEY;
    export async function getSingleMovieData(movieId: string) {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`

        try {
            const responce = await fetch(url);
            const data = await responce.json();
            return data;
        }catch(error) {
            throw Error("Something went wrong");
        }
    }
