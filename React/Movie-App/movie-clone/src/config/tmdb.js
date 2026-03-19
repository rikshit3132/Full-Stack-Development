
const key = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieDetails = async (title) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}`,
    );

    const data = await res.json();

    return data.results[0]; // first match
  } catch (err) {
    console.log("TMDB Error:", err);
    return null;
  }
};