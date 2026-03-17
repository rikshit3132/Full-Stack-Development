import React from 'react'
import { Link } from 'react-router-dom'

const WatchList = ({ watchlist, setWatchList }) => {
    console.log(watchlist);
   const genreIds = {
     28: "Action",
     12: "Adventure",
     16: "Animation",
     35: "Comedy",
     80: "Crime",
     99: "Documentary",
     18: "Drama",
     10751: "Family",
     14: "Fantasy",
     36: "History",
     27: "Horror",
     10402: "Music",
     9648: "Mystery",
     10749: "Romance",
     878: "Sci-Fi",
     10770: "TV",
     53: "Thriller",
     10752: "War",
     37: "Western",
   };

  return (
    <>
      <div className="text-4xl text-center font-bold m-5">
        <h1>WatchList</h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-8 text-center">
    
        {watchlist.map((movie) => {
          return (
            <div
              className="flex  flex-col h-[40vh] w-[250px] border-2 text-blue-400 font-bold text-2xl rounded-2xl h-[60vh] bg-cover bg-center justify-between"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              }}
            >
              <div>{movie.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WatchList