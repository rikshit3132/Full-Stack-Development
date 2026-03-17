import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend, 
} from "recharts";

const HourlyWeatherChart = ({ data }) => {
  if (!data?.list?.length) return null;

  const sortedData = [...data.list].sort((a, b) => a.dt - b.dt);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const chartData = sortedData.slice(0, 8).map((item) => ({
    time: formatTime(item.dt),
    temp: Math.round(item.main.temp),
  }));

  return (
    <div className="w-full">
      <div className="bg-slate-900 pt-25 backdrop-blur-md border border-slate-700  shadow-2xl">
        <h2
          style={{ animation: `ping 5s linear 1` }}
          className="text-center text-4xl font-bold text-sky-400 mb-12"
        >
          🌡 Temperature Analysis (Hourly)
        </h2>

        <div className="w-full h-[320px] pr-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="slate" />

              <XAxis
                dataKey="time"
                stroke="green"
                tick={{ fill: "pink", fontSize: 16 }}
              />

              <YAxis stroke="green" tick={{ fill: "pink", fontSize: 16 }} />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "10px",
                  color: "#fff",
                }}
                labelStyle={{ color: "red" }}
              />
              <Legend wrapperStyle={{ fontSize: "22px" }} />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#ffb703"
                name="Hourly Temp"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HourlyWeatherChart;
