import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useState,useEffect } from 'react'
import genreids from '../helpers/genreids';

const WatchList = () => {
  const [watchList,setWatchList] = useState([]);
  const[search,setSearch] = useState("");
  useEffect(() => {
      const watchmovieData =
        JSON.parse(localStorage.getItem("watchListMovies")) || [];
        console.log(watchmovieData);
      setWatchList(watchmovieData);
    },[])
    const ascOrderRating = ()=>{
     const sortedWatchList = [...watchList].sort(
       (obj1, obj2) => obj1.vote_average - obj2.vote_average,
     );
     setWatchList(sortedWatchList)
    } 
    const descOrderRating = () => {
      const sortedWatchList = [...watchList].sort(
        (obj1, obj2) => obj2.vote_average - obj1.vote_average,
      );
      setWatchList(sortedWatchList);
    }; 
  return (
    <div className="my-10 mx-5">
      <div className="flex justify-center my-10">
        <input
          placeholder="Search by movie name"
          className="h-[3rem] w-[18rem] px-4 outline-none border border-slate-700 "
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900 ">Name</th>
            <th>
              <div className="flex">
                <ArrowUp size={24} strokeWidth={2} onClick={ascOrderRating} />
                <div>Ratings</div>
                <ArrowDown
                  size={24}
                  strokeWidth={2}
                  onClick={descOrderRating}
                />
              </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
            <th>Action Button</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList?.length > 0 &&
            watchList
              .filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .trim()
                  .includes(search.toLowerCase());
              })
              .map((movie, idx) => {
                return (
                  <tr key={idx}>
                    <td className="flex items-center px-4 py-4 font-normal text-gray-700">
                      <img
                        className="h-[6rem] w-[10rem] object-cover"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="Poster of Movie"
                      ></img>
                      <div className="font-medium text-gray-700 text-sm pl-4 py-4">
                        {movie?.title}
                      </div>
                    </td>
                    <td className="pl-4 py-4">
                      <div>{movie?.vote_average}</div>
                    </td>
                    <td className="pl-4 py-4">
                      <div>{movie?.popularity}</div>
                    </td>
                    <td className="pl-4 py-4">
                      <div>{genreids[movie?.genre_ids[0]]}</div>
                    </td>
                    <td className="pl-4 py-4">
                      <div>Delete</div>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList