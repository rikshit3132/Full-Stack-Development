import React from "react";

const HourlyForcast = ({ data, weatherBackgrounds }) => {
  if (!data?.list?.length) return null;

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

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const min = minutes.toString().padStart(2, "0");

    return `${hours}:${min} ${ampm}`;
  };

  const getTimePeriod = (timestamp) => {
    const hour = new Date(timestamp * 1000).getHours();

    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 17) return "afternoon";
    if (hour >= 17 && hour < 20) return "evening";
    return "night";
  };

  const getCardColor = (index) => {
    if (index < 2) return "border-red-400 text-red-300";
    if (index < 4) return "border-green-400 text-green-300";
    if (index < 6) return "border-yellow-400 text-yellow-300";
    return "border-orange-400 text-orange-300";
  };

  const sortedHourlyData = [...data.list].sort((a, b) => a.dt - b.dt);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-black py-16">
      <h2  style={{ animation: `ping 5s linear 1` }}
        className= "text-center text-4xl font-bold text-sky-400 mb-12">
        ⏰ Hourly Forecast
      </h2>

      <div className="flex justify-center">
        <div className="flex gap-6 flex-wrap px-5 justify-center">
          {sortedHourlyData.slice(0, 8).map((item, index) => {
            const condition = item.weather?.[0]?.main;
            const period = getTimePeriod(item.dt);
            const colorClass = getCardColor(index);

            const bgImage =
              weatherBackgrounds?.[condition] ||
              weatherBackgrounds?.Clear ||
              "";

            return (
              <div
                key={index}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  animation: `spin 5s linear 1`,
                  animationDelay: `${index * 0.1}s`,
                }}
                className={`flex flex-col items-center h-80 min-w-[280px]
bg-slate-800/60 backdrop-blur-md border
p-5 rounded-2xl shadow-xl text-white
hover:scale-105 hover:shadow-2xl
transition-all duration-300
${colorClass}`}
              >
                <div className="text-gray-300 text-xl mb-1">
                  {formatDate(item.dt)}
                </div>

                <div className={`font-semibold ${colorClass} text-2xl`}>
                  {formatTime(item.dt)}
                </div>

                <div
                  className={`${colorClass} text-6xl my-3 animate-bounce [animation-duration:4s]`}
                >
                  {getWeatherIcon(condition)}
                </div>

                <div className={`${colorClass} font-bold text-xl`}>
                  {Math.round(item.main.temp)}°C
                </div>

                <div className={`${colorClass} text-2xl`}>{condition}</div>

                <div className="text-xl mt-2 text-blue-300">
                  🌧 {Math.round(item.pop * 100)}%
                </div>

                <div className="text-xl capitalize mt-2 text-gray-300">
                  {period}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyForcast;
