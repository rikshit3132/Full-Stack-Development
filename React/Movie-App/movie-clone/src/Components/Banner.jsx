import React from "react";
import { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useEffect } from "react";
import axios from "axios"
import Spinner from "./Spinner";
const Banner = () => {
  const [movies, setMovies] = useState([
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const[loader,setLoader] = useState(false);
  useEffect(() => {
   setLoader(true);
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=b6d8db27836890ad9fc23a28bc8a2e73&language=en-US`;
axios.get(url).then((response) =>{
    console.log(response);
    const movieData = response?.data?.results.slice(0,5);
    // console.log(movieData)
        setMovies(
          movieData.map((movie) => ({
            title: movie?.title,
            bannerImage: `https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path
            }`,
          })),
        );
        setLoader(false);
})
  },[])
  const handleNext = () => {
    setCurrentIdx((prevState) => (prevState + 1) % movies.length);
  };
  const handlePrev = () => {
    setCurrentIdx((prevState) =>
      prevState === 0 ? movies.length - 1 : prevState - 1,
    );
  };
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        movies.length > 0 && (
          <div className="relative h-[80vh]">
            <div
              className="h-full bg-cover rounded-3xl border-3 border-blue-600 bg-center flex items-end transition-all duration-300"
              style={{
                backgroundImage: `url(${movies[currentIdx]?.bannerImage})`,
              }}
            >
              <div className="text-white w-full text-center text-2xl p-4 bg-black/50">
                {movies[currentIdx]?.title}
              </div>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2"
                onClick={handlePrev}
              >
                <ChevronsLeft />
              </button>
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2">
                <ChevronsRight onClick={handleNext} />
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Banner;
