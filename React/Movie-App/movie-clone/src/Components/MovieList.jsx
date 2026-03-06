import React from 'react'

const MovieList = ({movies,checkMoviePresent,addToWatchList,removeFromWatchList,handleOpenModel}) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-6">
      {movies.length > 0 &&
        movies.map((movie) => {
          return (
            <div className="w-[280px] items-start" key={movie.id}>
              <div
                className="h-[400px] relative rounded-3xl border-2 border-blue-500 bg-cover bg-center flex items-end  shadow-lg hover:scale-105 hover:border-amber-300 transition-all duration-300"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                }}
              >
                <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col gap-2 text-2xl">
                  {checkMoviePresent(movie) ? (
                    <div
                      onClick={() => removeFromWatchList(movie)}
                      className="cursor-pointer flex justify-center items-center text-3xl"
                    >
                      ❌
                    </div>
                  ) : (
                    <div
                      onClick={() => addToWatchList(movie)}
                      className="cursor-pointer flex justify-center items-center text-3xl"
                    >
                      😍
                    </div>
                  )}
                </div>

                <div className="text-white w-full text-center rounded-3xl border-2 border-blue-500 cursor-pointer hover:border-amber-300 text-lg p-3 bg-black/60"
                onClick={() => handleOpenModel(movie)}>
                  {movie.title}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MovieList