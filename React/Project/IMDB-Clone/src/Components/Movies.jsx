import React, { useState } from "react";
import movie1 from "../assets/img/movie1.jpg";
const Movies = () => {
    const[pageNo,setPageNo] = useState(1);
  const [movies, setMovies] = useState([
    {
      url: `${movie1}`,
      title: "Movie-1",
    },
    {
      url: `${movie1}`,
      title: "Movie-2",
    },
    {
      url: `${movie1}`,
      title: "Movie-3",
    },
    {
      url: `${movie1}`,
      title: "Movie-4",
    },
    {
      url: `${movie1}`,
      title: "Movie-5",
    },
  ]);
  const handleNext = ()=>{
    setPageNo(pageNo + 1);
  }
  const handlePrev = ()=>{
    if(pageNo <= 1){
        return;
    }
 setPageNo(pageNo - 1);
  }
  return (
    <>
      <div className="text-4xl text-center font-bold m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly gap-7 m-3  ">
        {movies.map((movie) => (
          <div
            class="flex w-full border-2 text-pink-400 font-bold text-2xl rounded-2xl h-[60vh] bg-[url('/image.jpg')] bg-cover bg-center items-center justify-center "
            style={{ backgroundImage: `url(${movie1})` }}
          >
            <div>{movie.title}</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-500 text-white p-4 mt-8 h-[50px] flex justify-center gap-3">
        <div onClick={handlePrev}>
          <i onClick={handlePrev} class="fa-solid fa-arrow-left text-white"></i>
        </div>
        {pageNo}
        <div onClick={handleNext}>
          <i class="fa-solid fa-arrow-right text-white"></i>
        </div>
      </div>
    </>
  );
};

export default Movies;
