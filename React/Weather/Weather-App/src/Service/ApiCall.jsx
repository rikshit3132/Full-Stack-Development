import React, { useEffect, useState } from "react";
import axios from "axios";
import rainImg from "../assets/Weather-Images/rainy.webp";
import clearImg from "../assets/Weather-Images/clear.webp";
import cloudImg from "../assets/Weather-Images/cloudy.webp";
import snowImg from "../assets/Weather-Images/snowy.webp";
import thunderImg from "../assets/Weather-Images/thunder.webp";
import mistImg from "../assets/Weather-Images/mist.webp";
import fogImg from "../assets/Weather-Images/fog.webp";
import drizzleImg from "../assets/Weather-Images/drizzle.webp";

import WeatherChart from "../Components/WeatherChart";
import ForecastToggle from "../Components/ForcastToggle";
const ApiCall = ({ lat, lon }) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
 console.log("API DATA:", data);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchData = async () => {
      try {
        setLoader(true);

        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
        );

        console.log("Calling Api for hourly/weekly", res);
        setData(res?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [lat, lon]);

  const weatherBackgrounds = {
    Rain: rainImg,
    Clear: clearImg,
    Clouds: cloudImg,
    Snow: snowImg,
    Fog: fogImg,
    Thunderstorm: thunderImg,
    Mist: mistImg,
    Drizzle: drizzleImg
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧️";
      case "Snow":
        return "❄️";
      case "Thunderstorm":
        return "⛈️";
      case "Drizzle":
        return "🌦️";
      default:
        return "🌤️";
    }
  };
 

  return (
    <>
      {loader ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div>
          <p className="text-white mt-4 text-lg">Loading weather data...</p>
        </div>
      ) : (
        <div>
          {data && (
            <ForecastToggle
              data={data}
              weatherBackgrounds={weatherBackgrounds}
              getWeatherIcon={getWeatherIcon}
            />
          )}
          {data && <WeatherChart data={data} />}
        </div>
      )}
    </>
  );
};

export default ApiCall;
