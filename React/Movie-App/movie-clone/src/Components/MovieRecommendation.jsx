import React, { useEffect } from "react";
import { getMoviesRecommendations } from "../config/gemini";

const MovieRecommendation = ({ watchList, setShowModal }) => {
    useEffect(() => {
        const fetchRecommendation = async() =>{
            if(watchList.length < 2){
                return;
            }
            try{
                const result = await getMoviesRecommendations(watchList);
                console.log(result);
            }catch(err){
                console.log(err);
            }
        }
        fetchRecommendation();
    },[])
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-black/50 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 overflow-auto relative">
       <button
            className="absolute top-4 right-4 text-red-500 text-lg"
            onClick={() => setShowModal((prevState) => !prevState)}
          >
            X
          </button>
        {watchList?.length < 2 ? (
            
          <div className="p-4 text-center">
            <p className="text-gray-600">
              Add at least 2 movies to your watchlist to get personlized
              recommendation!!
            </p>
          </div>
        ) : (
          <div>
            Recommended movies
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieRecommendation;
