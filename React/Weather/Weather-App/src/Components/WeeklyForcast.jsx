import React from "react";

const WeeklyForecast = ({ data, getWeatherIcon, weatherBackgrounds }) => {
  const getDay = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const getCardColor = (index) => {
    if (index < 2) return "border-red-400 text-red-300";
    if (index < 4) return "border-green-400 text-green-300";
    if (index < 6) return "border-yellow-400 text-yellow-300";
    return "border-orange-400 text-orange-300";
  };

  // Group forecast data by day
  const grouped = {};

  data?.list?.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!grouped[date]) {
      grouped[date] = {
        date: item.dt_txt,
        temps: [],
        condition: item.weather[0].main,
        pop: item.pop,
      };
    }

    grouped[date].temps.push(item.main.temp);
  });

  // Calculate min and max temperatures
  const dailyData = Object.values(grouped).map((day) => ({
    ...day,
    minTemp: Math.min(...day.temps),
    maxTemp: Math.max(...day.temps),
  }));
  const isToday = (dateTime) => {
    const today = new Date().toDateString();
    const cardDate = new Date(dateTime).toDateString();

    return today === cardDate;
  };

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-black py-16">
      <h1
        style={{ animation: `ping 5s linear 1` }}
        className="text-center text-4xl font-bold text-sky-400 mb-12"
      >
        📅 Next 5-Days Forecast
      </h1>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center px-5">
          {dailyData.slice(0, 5).map((item, index) => {
            const colorClass = getCardColor(index);
            const todayCard = isToday(item?.date);
            const condition = item.condition;
            const bgImage =
              weatherBackgrounds[condition] || weatherBackgrounds.Clear;
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
                className={`flex flex-col items-center h-80 min-w-[220px]
bg-slate-800/60 backdrop-blur-md
border rounded-xl shadow-lg
p-4
hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sky-400/30
transition-all duration-300

${colorClass}
${todayCard ? "border border-yellow-400 shadow-yellow-400/50 shadow-xl" : ""}`}
              >
                {todayCard && (
                  <span className="text-1xl text-green-400 px-2 py-1 rounded-full mb-2">
                    Today
                  </span>
                )}
                {/* Day */}
                <div className={`text-2xl font-bold ${colorClass}`}>
                  {getDay(item.date)}
                </div>

                {/* Icon */}
                <div
                  className={`text-6xl my-4 ${colorClass}  animate-bounce [animation-duration:2s]`}
                >
                  {getWeatherIcon(item.condition)}
                </div>

                {/* Max / Min Temperature */}
                <div className="flex gap-4 text-2xl font-bold mt-2">
                  <span className="text-red-400">
                    {Math.round(item.maxTemp)}°
                  </span>
                  <span className="text-blue-400">
                    {Math.round(item.minTemp)}°
                  </span>
                </div>

                {/* Condition */}
                <div className="text-2xl text-gray-300 mt-2">
                  {item.condition}
                </div>

                {/* Rain Probability */}
                <div className="text-blue-300 text-lg mt-3">
                  🌧 {Math.round(item.pop * 100)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
