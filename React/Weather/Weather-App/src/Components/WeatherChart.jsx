import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const WeatherChart = ({ data }) => {
  const [mode, setMode] = useState("hourly");

  if (!data?.list?.length) return null;

  // ---------- HOURLY DATA ----------
  const getHourlyData = () => {
    const sorted = [...data.list].sort((a, b) => a.dt - b.dt);

    return sorted.slice(0, 8).map((item) => ({
      time: new Date(item.dt * 1000).toLocaleTimeString([], {
        hour: "numeric",
      }),
      temp: Math.round(item.main.temp),
    }));
  };

  // ---------- WEEKLY DATA ----------
  const getWeeklyData = () => {
    const grouped = {};

    data.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];

      if (!grouped[date]) {
        grouped[date] = { date, temps: [] };
      }

      grouped[date].temps.push(item.main.temp);
    });

    return Object.values(grouped)
      .slice(0, 5)
      .map((day) => ({
        day: new Date(day.date).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        min: Math.round(Math.min(...day.temps)),
        max: Math.round(Math.max(...day.temps)),
      }));
  };

  const chartData = mode === "hourly" ? getHourlyData() : getWeeklyData();

  return (
    <div className="w-full">
      <div className="bg-slate-900 p-6  border border-slate-800 shadow-xl">
        {/* 🔥 Toggle Buttons */}
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={() => setMode("hourly")}
            className={`px-4 py-2 cursor-pointer font-semibold rounded-lg text-sm ${
              mode === "hourly"
                ? "bg-sky-500 text-white"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            3 Hourly
          </button>

          <button
            onClick={() => setMode("weekly")}
            className={`px-4 py-2 cursor-pointer font-semibold rounded-lg text-sm ${
              mode === "weekly"
                ? "bg-sky-500 text-white"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            5 Days
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl text-center font-semibold text-slate-200 pb-5 ">
          {mode === "hourly" ? "🌡 3 Hourly Temperature" : "📊 5-Day Temperature"}
        </h2>

        {/* Chart */}
        <div className="w-full h-[320px] ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1e293b"
                vertical={false}
              />

              <XAxis
                dataKey={mode === "hourly" ? "time" : "day"}
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8", fontSize: 18 }}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                unit="°C"
                stroke="#94a3b8"
                tick={{ fill: "#94a3b8", fontSize: 18 }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: "12px",
                  color: "#e2e8f0",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
                labelStyle={{
                  color: "#38bdf8",
                  fontWeight: "bold",
                }}
              />

              {/* Conditional Lines */}
              {mode === "hourly" ? (
                <Line
                  type="natural"
                  dataKey="temp"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              ) : (
                <>
                  <Line
                    type="natural"
                    dataKey="max"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="natural"
                    dataKey="min"
                    stroke="#38bdf8"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6 }}
                  />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
