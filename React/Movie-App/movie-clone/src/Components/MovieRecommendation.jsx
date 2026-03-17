import React, { useEffect, useState } from "react";
import { getMoviesRecommendations}  from "../config/gemini";
import Spinner from "./Spinner"
const MovieRecommendation = ({ watchList, setShowModal }) => {
  const [recommendations,setRecommendation] = useState([]);
    const [loader,setLoader] = useState(false);  
  useEffect(() => {
        const fetchRecommendation = async() =>{
            if(watchList.length < 2){
                return;
            }
            try{
              setLoader(true);
                const result = await getMoviesRecommendations(watchList);
                setRecommendation(result?.recommendations);
            }catch(err){
                console.log(err);
            }finally{
              setLoader(false);
            }
        }
        fetchRecommendation();
    },[watchList])
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-black/50 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 overflow-auto relative">
        {loader ? (
          <div className="flex justify-center items-center py-8">
            <div className="loader"></div>
            <span className="ml-2">
              Getting Your Personlized Recommendations..
            </span>
          </div>
        ) : (
          <>
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
              <div className="grid gap-4">
                {recommendations?.length > 0 &&
                  recommendations.map((movie, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold">{movie.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          {movie.confidence}% Match
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm">
                        {movie.reason}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MovieRecommendation;
