import React from "react";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import MovieList from "./MovieList";
import MovieInfo from "./MovieInfo";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const[watchList,setWatchList] = useState([]);
  const[openModel,setOpenModel] = useState(false);
  const[selectedMovie,setSelectedMovie] = useState(null);
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
     setMovies(movieData);
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
   const handleOpenModel = (movie) => {
    setSelectedMovie(movie);
    setOpenModel(true);
   }
   const handleCloseModal = () =>{
    setSelectedMovie(null);
    setOpenModel(false);
   }
  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="bg-slate-700">
          <div className="text-3xl font-bold text-center m-8 mt-0 pt-10 ">
            Trending Movies
          </div>
          <MovieList
            movies={movies}
            checkMoviePresent={checkMoviePresent}
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
            handleOpenModel={handleOpenModel}
          />
          <Pagination
            pageNo={pageNo}
            handleNext={handleNext}
            handlePre={handlePre}
          />
          {openModel && selectedMovie && (
            <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-black/50 flex justify-center items-center h-screen">
              <MovieInfo handleCloseModal={handleCloseModal} movie ={selectedMovie}/>
              
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
