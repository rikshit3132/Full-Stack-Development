import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Display from "./Display";
import WeatherDisplay from "./WeatherDisplay";
import WeeklyForcast from "./WeeklyForcast";
import HourlyForcast from "./HourlyForcast";
import ApiCall from "../Service/ApiCall";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeatherByCoords = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch weather
          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
          );
          const weatherData = await weatherRes.json();
          setWeather(weatherData);

          // Fetch air quality
          const airRes = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`,
          );
          const airData = await airRes.json();
          setAirQuality(airData);
        } catch (error) {
          console.error("Error fetching location weather:", error);
          alert("Failed to fetch weather.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Could not get your location. Please use city search.");
        setLoading(false);
      },
    );
  };

  return (
    <div>
      {/* WHITE SECTION */}
      <div className="min-h-screen pt-20 bg-gradient-to-b from-sky-100 to-sky-300 border-2 border-slate-300 rounded-2xl">
        <div className="bg-red-600 text-white text-center py-3 font-semibold animate-pulse">
          ⚠️ Govts. Guidelines about weather conditions... Incomplete!!
        </div>

        <div className="text-center animate-pulse font-extrabold text-5xl text-slate-900  pt-12">
          <span className="animate-bounce inline-block [animation-duration:2s]">
            {" "}
            🌦️🌤️
          </span>{" "}
          Weather{" "}
          <span className="text-blue-400">
            Predictor{" "}
            <span className="animate-bounce [animation-duration:2s] inline-block">
              🌧️☔︎
            </span>
            ︎
          </span>
        </div>

        <div className="py-16">
          <SearchBar
            setWeather={setWeather}
            setAirQuality={setAirQuality}
            fetchWeatherByCoords={fetchWeatherByCoords}
            setLoading={setLoading}
          />
        </div>
      </div>

      {/* DARK SECTION */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-20 h-20 border-8 border-yellow-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="bg-black py-10 ">
            {weather && <Display weather={weather} />}
          </div>

          <div className="bg-black py-10 ">
            {weather && (
              <WeatherDisplay airQuality={airQuality} weather={weather} />
            )}
          </div>
          <div>
            {weather && (
              <ApiCall lat={weather?.coord?.lat} lon={weather?.coord?.lon} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
