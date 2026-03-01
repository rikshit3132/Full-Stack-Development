import React from 'react'
import { Link } from 'react-router-dom'

const WatchList = ({ watchlist, setWatchList }) => {
    console.log(watchlist);
    const genreId = [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Abenteuer",
        },
        {
          id: 16,
          name: "Animation",
        },
        {
          id: 35,
          name: "Komödie",
        },
        {
          id: 80,
          name: "Krimi",
        },
        {
          id: 99,
          name: "Dokumentarfilm",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10751,
          name: "Familie",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 36,
          name: "Historie",
        },
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 10402,
          name: "Musik",
        },
        {
          id: 9648,
          name: "Mystery",
        },
        {
          id: 10749,
          name: "Liebesfilm",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
        {
          id: 10770,
          name: "TV-Film",
        },
        {
          id: 53,
          name: "Thriller",
        },
        {
          id: 10752,
          name: "Kriegsfilm",
        },
        {
          id: 37,
          name: "Western",
        },
    ];
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