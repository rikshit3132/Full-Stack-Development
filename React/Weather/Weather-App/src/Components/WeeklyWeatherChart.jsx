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

const WeeklyWeatherChart = ({ data }) => {
  if (!data?.list?.length) return null;

  // Group by date
  const grouped = {};

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!grouped[date]) {
      grouped[date] = {
        date,
        temps: [],
      };
    }

    grouped[date].temps.push(item.main.temp);
  });

  const chartData = Object.values(grouped)
    .slice(0, 5)
    .map((day) => ({
      day: new Date(day.date).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      min: Math.round(Math.min(...day.temps)),
      max: Math.round(Math.max(...day.temps)),
    }));

  return (
    <div className="w-full ">
      <div className="bg-slate-900 pt-25 backdrop-blur-md border border-slate-700 shadow-2xl">
        <h2
          style={{ animation: `ping 5s linear 1` }}
          className="text-center text-4xl font-bold text-sky-400 mb-12"
        >
          📊 Temperature Analysis (5 days)
        </h2>

        <div className="w-full h-[380px] pr-6 ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="slate" />

              <XAxis
                dataKey="day"
                stroke="green"
                tick={{ fill: "pink", fontSize: 16 }}
              />

              <YAxis stroke="green" tick={{ fill: "pink", fontSize: 16 }} />

              <Tooltip
                contentStyle={{
                  backgroundColor: "gray",
                  border: "1px solid #334155",
                  borderRadius: "10px",
                  color: "#fff",
                }}
                labelStyle={{ color: "#38bdf8" }}
              />

              <Legend wrapperStyle={{ fontSize: "22px" }} />

              {/* Max Temperature */}
              <Line
                type="monotone"
                dataKey="max"
                stroke="yellow"
                strokeWidth={3}
                name="Max Temp"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

              {/* Min Temperature */}
              <Line
                type="monotone"
                dataKey="min"
                stroke="#38bdf8"
                strokeWidth={3}
                name="Min Temp"
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

export default WeeklyWeatherChart;
