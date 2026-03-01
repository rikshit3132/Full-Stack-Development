import React, { useEffect, useState } from "react";

import axios from "axios";
const Movies = ({watchlist,setWatchList}) => {
  const [pageNo, setPageNo] = useState(1);
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?page=${pageNo}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmQ4ZGIyNzgzNjg5MGFkOWZjMjNhMjhiYzhhMmU3MyIsIm5iZiI6MTc1MjU5OTE5My45MTIsInN1YiI6IjY4NzY4YTk5YzVkZDk3ZmQ2ZGE3YjMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wa_mUt085wsYAV6Nu_CG0TYdSvFoRL9n4oTWa9OvW7A",
        },
      })
      .then((data) => {
        console.log(data);
        setMovies(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  },[pageNo]);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrev = () => {
    if (pageNo <= 1) {
      return;
    }
    setPageNo(pageNo - 1);
  };
  const addMovieWatchList = (movie)=>{
    setWatchList((prev) => [...prev,movie])
  } 
  const deleteMovieWatchList = (movieName) => {
    const filered = watchlist.filter((movie) => movie.id != movieName.id);
    setWatchList(filered);
  }; 
  const doesContain = (movieName) =>{
    return watchlist.some((movie) => movie.id === movieName.id);
  }
  return (
    <>
      <div className=" text-4xl text-center font-bold tracking-widest m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-8 text-center ">
        {movies.map((movie) => {
          const isAdded = doesContain(movie);
          console.log(isAdded);
          return (
            <div
              className="flex  flex-col h-[40vh] w-[250px] border-2 font-semibold  text-white  text-2xl rounded-4xl h-[60vh] bg-cover bg-center justify-between border-blue-400"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              }}
            >
              {isAdded ? (
                <div
                  className="hover:cursor-pointer "
                  onClick={() => deleteMovieWatchList(movie)}
                >
                  ❌
                </div>
              ) : (
                <div
                  className="hover:cursor-pointer"
                  onClick={() => addMovieWatchList(movie)}
                >
                  😍
                </div>
              )}

              <div>{movie.title}</div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-500  p-1 mt-2 mb-4 h-[50px] flex justify-center gap-3 font-bold text-white text-3xl border-2 border-amber-200">
        <div onClick={handlePrev} className="text-3xl text-center">
          <i
            onClick={handlePrev}
            className="fa-solid fa-arrow-left text-blue-600 "
          ></i>
        </div>
        {pageNo}
        <div onClick={handleNext} className="text-3xl text-center">
          <i className="fa-solid fa-arrow-right text-blue-600 "></i>
        </div>
      </div>
    </>
  );
};

export default Movies;
