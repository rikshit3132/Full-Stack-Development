import React, { useEffect, useState } from "react";
import { getMoviesRecommendations } from "../config/gemini";
import { fetchMovieDetails } from "../config/tmdb";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const MovieRecommendation = ({ watchList, setShowModal }) => {
  const [recommendations, setRecommendation] = useState([]);
  const [loader, setLoader] = useState(false);

 useEffect(() => {
   const fetchRecommendation = async () => {
     if (!watchList || watchList.length < 2) return;

     setLoader(true);

     const result = await getMoviesRecommendations(watchList);

     const movies = result.recommendations || [];

     // 🔥 Fetch posters for each movie
     const enrichedMovies = await Promise.all(
       movies.map(async (movie) => {
         const details = await fetchMovieDetails(movie.title);

         return {
           ...movie,
           poster_path: details?.poster_path || null,
         };
       }),
     );

     setRecommendation(enrichedMovies);

     setLoader(false);
   };

   fetchRecommendation();
 }, [watchList]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-center items-center px-4">
      <div className="bg-gray-900 text-white p-6 rounded-2xl w-full max-w-6xl h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button
          className="absolute top-4 cursor-pointer right-4 text-red-400 hover:text-red-600 text-xl"
          onClick={() => setShowModal(false)}
        >
          ❌
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          🎬 AI Movie Recommendations
        </h2>

        {/* Loader */}
        {loader ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendations.map((movie, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {/* Poster */}
                <img
                  src={
                    movie.poster_path
                      ? `${IMAGE_BASE}${movie.poster_path}`
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>

                  <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                    {movie.reason}
                  </p>

                  <span className="text-xs bg-red-500 px-2 py-1 rounded-full">
                    {movie.confidence}% Match
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieRecommendation;
