import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ setWeather, fetchWeatherByCoords, setLoading }) => {
  const [city, setCity] = useState("");
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // 🔹 Fetch city suggestions
  const fetchSuggestions = async (value) => {
    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`,
      );
      const data = await res.json();
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (err) {
      console.error("Suggestion error:", err);
    }
  };

  // 🔹 When typing
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    fetchSuggestions(value);
  };

  // 🔹 When clicking suggestion
  const handleSelectSuggestion = async (item) => {
    setCity(item.name);
    setShowSuggestions(false);
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&appid=${apiKey}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error("Weather fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch by city manually (Search button)
  const fetchWeatherByCity = async () => {
    if (!city) {
      alert("Please enter a city!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      );
      const data = await res.json();

      if (!res.ok) throw new Error("City not found");

      setWeather(data);
      setSuggestions([]);
      setShowSuggestions(false);
    } catch (err) {
      console.error("City search error:", err);
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Search button handler
  const handleSearch = () => {
    if (useCurrentLocation) {
      fetchWeatherByCoords();
    } else {
      fetchWeatherByCity();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Radio Buttons */}
      <div className="flex gap-6 mb-4 text-white">
        <label className="flex items-center gap-3 text-lg cursor-pointer text-slate-800">
          <input
            type="radio"
            name="locationType"
            checked={!useCurrentLocation}
            onChange={() => setUseCurrentLocation(false)}
            className="scale-150 accent-blue-500"
          />
          Search by City
        </label>

        <label className="flex items-center gap-3 text-lg cursor-pointer text-slate-800">
          <input
            type="radio"
            name="locationType"
            checked={useCurrentLocation}
            onChange={() => setUseCurrentLocation(true)}
            className="scale-150 accent-blue-600"
          />
          Use Current Location
        </label>
      </div>

      {/* City Input */}
      {!useCurrentLocation && (
        <div className="relative w-[700px]">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            className="w-full h-14 pl-20 pr-28 text-2xl font-semibold rounded-full 
                       border border-blue-500 
                       focus:border-blue-700 placeholder-slate-400 text-slate-800 focus:ring-2 focus:ring-blue-400
                       outline-none transition-all shadow-lg duration-300
                       bg-white/30"
          />

          <Search
            className="absolute left-6 top-1/2 -translate-y-1/2 text-black pointer-events-none"
            size={24}
          />

          {/* 🔹 Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-blue-300 rounded-3xl shadow-lg z-50 max-h-60 overflow-y-auto">
              {suggestions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectSuggestion(item)}
                  className="px-4 py-3 hover:bg-yellow-500 cursor-pointer text-white text-2xl text-center"
                >
                  {item.name}
                  {item.state ? `, ${item.state}` : ""}, {item.country}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="mt-4     
        bg-blue-600
         text-white
         px-8 py-3
         rounded-full
         font-semibold
         shadow-lg
         transition duration-300
         hover:scale-105
         hover:shadow-xl
         hover:bg-red-500
        "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
