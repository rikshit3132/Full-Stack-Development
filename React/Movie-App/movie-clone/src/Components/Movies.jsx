import React from "react";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const[watchList,setWatchList] = useState([]);
  const handlePre = () => {
    setPageNo((prevPage) => {
      if (prevPage === 1) {
        return prevPage;
      }
      return prevPage - 1;
    });
  };
  const handleNext = () => {
    setPageNo((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    const watchmovieData = JSON.parse(localStorage.getItem("watchListMovies"));
    setWatchList(watchmovieData);
  },[])
  useEffect(() => {
localStorage.setItem("watchListMovies",JSON.stringify(watchList));
  },[watchList]);

  useEffect(() => {
    setLoader(true);
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=b6d8db27836890ad9fc23a28bc8a2e73&language=en-US&page=${pageNo}`;
    axios.get(url).then((response) => {
      console.log(response);
      const movieData = response?.data?.results;
      // console.log(movieData)
      setMovies(
        movieData.map((movie) => ({
          id: movie?.id,
          title: movie?.title,
          bannerImage: `https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path
          }`,
        })),
      );
      setLoader(false);
    });
  }, [pageNo]);
  const checkMoviePresent = (movie)=>{
    for(let i = 0; i < watchList?.length; i++){
        if(watchList[i].id === movie.id){
            return true;
        }
    }
    return false;
  }
  const addToWatchList = (movie)=>{
    setWatchList((prevState) => {
        const updatedWatchList = prevState ? [...prevState,movie]:[movie];
        return updatedWatchList;
    })
  }
   const removeFromWatchList = (movie) => {
    setWatchList((prevState) => {
        const filteredWatchList = prevState.filter((currMovie) => {
            return currMovie?.id != movie?.id;
        })
        return filteredWatchList;
    })
   };
  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-8">
            Trending Movies
          </div>

          <div className="flex flex-wrap justify-center  gap-6">
            {movies.length > 0 &&
              movies.map((movie) => {
                return (
                  <div className="w-[300px] items-start" key={movie.id}>
                    <div
                      className="h-[400px] relative rounded-3xl border-2 border-blue-500 bg-cover bg-center flex items-end  shadow-lg hover:scale-105 hover:border-amber-300 transition-all duration-300"
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.bannerImage})`,
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

                      <div className="text-white w-full text-center rounded-3xl border-2 border-blue-500 hover:border-amber-300 text-lg p-3 bg-black/60">
                        {movie.title}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <Pagination
            pageNo={pageNo}
            handleNext={handleNext}
            handlePre={handlePre}
          />
        </div>
      )}
    </>
  );
};

export default Movies;
