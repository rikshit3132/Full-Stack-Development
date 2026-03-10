import React from 'react'
import { useState,useEffect } from 'react';
import { motion } from "framer-motion";
const Display = ({ weather }) => {
  const [cityTime, setCityTime] = useState(new Date());
  console.log(weather);
  useEffect(() => {
    if (!weather) return;

    const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;

    const localTime = new Date(utc + weather.timezone * 1000);

    setCityTime(localTime);
  }, [weather]);
  const currentDate = cityTime.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentTime = cityTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(currentDate);
  console.log(currentTime);
  return (
    <>
      <div>
        <h1
          style={{ animation: `ping 5s linear 1` }}
          className="text-blue-400 font-bold text-center mb-5 text-4xl "
        >
          📍 Location & Time ⏰
        </h1>
      </div>

      <div className="mt-10 flex justify-center animate-pulse">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
         
          className="bg-slate-800/60 backdrop-blur-md 
                  border border-blue-700 
                  rounded-3xl p-12 
                  shadow-2xl w-[900px] text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">
            {weather.customCity || weather.name}
          </h1>
          <h3 className="text-2xl font-bold mb-4">Today</h3>

          <p className="text-2xl  mb-2 text-red-300">{currentDate}</p>

          <p className="text-4xl font-semibold text-blue-400">{currentTime}</p>
        </motion.div>
      </div>
    </>
  );
};

export default Display