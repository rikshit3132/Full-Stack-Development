import React, { useState } from "react";
import HourlyForcast from "./HourlyForcast";
import WeeklyForecast from "./WeeklyForcast";

const ForecastToggle = ({ data, weatherBackgrounds, getWeatherIcon }) => {
  const [view, setView] = useState("hourly");

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 pt-15 ">
      {/* Toggle Buttons */}
      <div className="flex justify-center">
        <div className="bg-slate-800 p-1 rounded-full flex gap-2 shadow-lg">
          <button
            onClick={() => setView("hourly")}
            className={`px-6 py-2 cursor-pointer  rounded-full font-semibold transition-all duration-300
              ${
                view === "hourly"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
          >
            3 Hourly
          </button>

          <button
            onClick={() => setView("weekly")}
            className={`px-6 cursor-pointer py-2 rounded-full font-semibold transition-all duration-300
              ${
                view === "weekly"
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
          >
            5 Days
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {view === "hourly" ? (
        <HourlyForcast data={data} weatherBackgrounds={weatherBackgrounds} />
      ) : (
        <WeeklyForecast
          data={data}
          getWeatherIcon={getWeatherIcon}
          weatherBackgrounds={weatherBackgrounds}
        />
      )}
    </div>
  );
};

export default ForecastToggle;
