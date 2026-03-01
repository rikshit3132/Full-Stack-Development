import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Banner = () => {
    const[movies,setMovies] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.themoviedb.org/3/trending/movie/day", {
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
    }, []);
  return (
    <>
      <div
        class=" flex w-full mt-4 h-[80vh] font-bold tracking-widest  bg-cover bg-center items-center justify-between text-center border-3 rounded-4xl border-blue-400"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            movies[2]?.backdrop_path
          })`,
        }}
      >
        
          {/* Left Arrow */}
          <div className="text-8xl cursor-pointer">
            <i className="fa-solid fa-arrow-left text-white"></i>
          </div>

          {/* Title */}
          <div className="text-white text-2xl font-bold text-center">
            Movie Text
          </div>

          {/* Right Arrow */}
          <div className="text-8xl cursor-pointer">
            <i className="fa-solid fa-arrow-right text-white"></i>
          </div>
        </div>
    </>
  );
}

export default Banner