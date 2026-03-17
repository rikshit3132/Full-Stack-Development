import React, { useEffect, useState } from "react";
import axios from "axios";
import HourlyForcast from "../Components/HourlyForcast";
import WeeklyForecast from "../Components/WeeklyForcast";
import HourlyWeatherChart from "../Components/HourlyWeatherChart"


import rainImg from "../assets/Weather-Images/rainy.jpg";
import clearImg from "../assets/Weather-Images/clear.jpg";
import cloudImg from "../assets/Weather-Images/cloudy.jpg";
import snowImg from "../assets/Weather-Images/snowy.jpg";
import thunderImg from "../assets/Weather-Images/thunder.jpg";
import mistImg from "../assets/Weather-Images/mist.jpg";
import fogImg from "../assets/Weather-Images/fog.jpg";
import drizzleImg from "../assets/Weather-Images/drizzle.jpg"
import WeeklyWeatherChart from "../Components/WeeklyWeatherChart";
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
          {data && <HourlyWeatherChart data={data} />}
          {data && (
            <HourlyForcast
              data={data}
              weatherBackgrounds={weatherBackgrounds}
            />
          )}
          {data && <WeeklyWeatherChart data ={data}/>}

          {data && (
            <WeeklyForecast
              data={data}
              weatherBackgrounds={weatherBackgrounds}
              getWeatherIcon={getWeatherIcon}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ApiCall;
