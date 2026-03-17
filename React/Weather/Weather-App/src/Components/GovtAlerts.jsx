import React, { useEffect, useState } from "react";
import axios from "axios";
import newsFeed from "../assets/Weather-Images/newspaper.webp"
const GovtAlerts = ({ lat, lon }) => {
  const [alerts, setAlerts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY2;

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchAlerts = async () => {
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1&alerts=yes`,
        );

        const data = res.data;
        console.log("Govt alerts data:", data);

        if (data.alerts?.alert) {
          const alertsArray = Array.isArray(data.alerts.alert)
            ? data.alerts.alert
            : [data.alerts.alert];

          setAlerts(alertsArray);
        }

        setLoading(false);
      } catch (err) {
        console.log("Govt alert error:", err);
        setLoading(false);
      }
    };

    fetchAlerts();
  }, [lat, lon]);

  // Rotate alerts every 30 seconds
  useEffect(() => {
    if (alerts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % alerts.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [alerts]);

  const alert = alerts[currentIndex];

  // Loading state
  if (loading) {
    return (
      <div className="bg-blue-600 mt-5 text-white text-center py-2 font-semibold animate-pulse">
        Checking Government Weather Alerts...
      </div>
    );
  }

  // No alerts
  if (alerts.length === 0) {
    return (
      <div className="flex flex-col bg-green-600 rounded-2xl text-xl mx-auto mt-5 w-[90%] justify-center items-center text-white text-center py-4 animate-pulse transition-all duration-500 font-semibold">
        {/* Alert Message */}
        <div className="mb-2">
          ⚠️ No Alerts for Current Location
          <span className="text-red-400"> !!!</span>
        </div>

        {/* News Section */}
        <div className="flex items-center gap-2">
          <img src={newsFeed} alt="NewsFeed" className="w-6 h-6" />

          <span>
            No Weather Headlines
            <span className="text-red-400"> !!!</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-600 mx-auto mt-5 rounded-2xl w-[90%] text-white  text-center py-3 font-semibold animate-pulse transition-all duration-500">
      <div className="text-lg">⚠️ {alert?.headline}</div>

      <div className="text-lg mt-1 font-semibold">
        📍 {alert?.areas || "Unknown Area"}
      </div>

      <div className="text-lg font-semibold">
        Severity: {alert?.severity} | Urgency: {alert?.urgency}
      </div>
    </div>
  );
};

export default GovtAlerts;
