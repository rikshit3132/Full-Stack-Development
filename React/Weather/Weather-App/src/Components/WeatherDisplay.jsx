import React from "react";
import { motion } from "framer-motion";

const WeatherDisplay = ({ airQuality,weather }) => {
  if (!weather) return null;

  const sunriseUTC = weather?.sys?.sunrise;
  const sunsetUTC = weather?.sys?.sunset;
  const windSpeed = weather?.wind?.speed;
  const windDeg = weather?.wind?.deg;
  const windGust = weather?.wind?.gust;

  const {
    feels_like,
    grnd_level,
    humidity,
    pressure,
    sea_level,
    temp,
    temp_max,
    temp_min,
  } = weather?.main || {};

  // ✅ FIXED Wind Direction
  const getWindDirection = (deg) => {
    if (deg === undefined) return null;
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(deg / 45) % 8];
  };

  // ✅ Convert m/s → km/h
  const getWindSpeedKph = (speed) => {
    if (!speed) return null;
    return (speed * 3.6).toFixed(1);
  };

  // ✅ FIXED Sunrise / Sunset Time (Correct Timezone Handling)
  const getCityTimeFromTimestamp = (timestamp) => {
    if (!timestamp) return null;

    // Add timezone offset BEFORE creating Date
    const cityDate = new Date((timestamp + weather.timezone) * 1000);

    const hours = cityDate.getUTCHours().toString().padStart(2, "0");
    const minutes = cityDate.getUTCMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const sunriseTime = getCityTimeFromTimestamp(sunriseUTC);
  const sunsetTime = getCityTimeFromTimestamp(sunsetUTC);

  const getAQILabel = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good 😊";
      case 2:
        return "Fair 🙂";
      case 3:
        return "Moderate 😐";
      case 4:
        return "Poor 😷";
      case 5:
        return "Very Poor ☠️";
      default:
        return "Unknown";
    }
  };
  const aqi = airQuality?.list?.[0]?.main?.aqi;

  return (
    <>
      <div>
        <h1 className="text-white text-center mb-5 text-4xl">
          🌍 Weather Details
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-0 text-center">
        {/* Positions */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-800/60 backdrop-blur-md border border-blue-400 rounded-2xl p-6 text-white shadow-xl mt-10"
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">
            📍 Positions
          </h2>
          {weather?.coord?.lon >= 0 ? (
            <p className="text-xl ">
              Longitude:{" "}
              <span className="text-blue-400">{weather?.coord?.lon} °E</span>
            </p>
          ) : (
            <p className="text-xl ">
              Longitude:{" "}
              <span className="text-blue-400">{weather?.coord?.lon} °W</span>
            </p>
          )}
          {weather?.coord?.lat >= 0 ? (
            <p className="text-xl">
              Latitude:{" "}
              <span className="text-blue-400">{weather?.coord?.lat} °N</span>
            </p>
          ) : (
            <p className="text-xl">
              Latitude:{" "}
              <span className="text-blue-400">{weather?.coord?.lat} °S</span>
            </p>
          )}
        </motion.div>

        {/* Sun Time */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-800/60 backdrop-blur-md mt-10 border border-yellow-400 rounded-2xl p-6 text-white shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
            🌅 Sun Time
          </h2>
          <p className="text-xl">
            Sunrise: <span className="text-yellow-400">{sunriseTime} AM</span>
          </p>
          <p className="text-xl">
            Sunset: <span className="text-yellow-400">{sunsetTime} PM</span>
          </p>
        </motion.div>

        {/* Wind */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-800/60 mt-10 backdrop-blur-md border border-green-400 rounded-2xl p-6 text-white shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4 text-green-400">
            🌬 Wind
          </h2>
          <p className="text-xl">
            Speed:{" "}
            <span className="text-green-400">
              {getWindSpeedKph(windSpeed)} km/h
            </span>
          </p>
          <p className="text-xl">
            Direction:{" "}
            <span className="text-green-400">{getWindDirection(windDeg)}</span>
          </p>
          <p className="text-xl">
            Gust:{" "}
            <span className="text-green-400">
              {windGust ? (windGust * 3.6).toFixed(1) : null} km/h
            </span>
          </p>
          <p className="text-xl">
            Air-Quality:{" "}
            <span className="text-green-400">{getAQILabel(aqi)}</span>
          </p>
        </motion.div>

        {/* Temperature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="bg-slate-800/60 mt-10 backdrop-blur-md border border-red-400 rounded-2xl p-6 text-white shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-4 text-red-400">
            🌡 Temperature
          </h2>
          <p className="text-xl">
            Temp: <span className="text-red-400">{temp}°C</span>
          </p>
          <p className="text-xl">
            Feels Like: <span className="text-red-400">{feels_like}°C</span>
          </p>
          <p className="text-xl">
            Max: <span className="text-red-400">{temp_max}°C</span>
          </p>
          <p className="text-xl">
            Min: <span className="text-red-400">{temp_min}°C</span>
          </p>
          <p className="text-xl">
            Humidity: <span className="text-red-400">{humidity}%</span>
          </p>
          <p className="text-xl">
            Pressure: <span className="text-red-400">{pressure} hPa</span>
          </p>
          <p className="text-xl">
            Ground Level: <span className="text-red-400">{grnd_level} hPa</span>
          </p>
          <p className="text-xl">
            Sea Level: <span className="text-red-400">{sea_level} hPa</span>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default WeatherDisplay;
