import React from "react";
import {
  CloudSun,
  MapPin,
  Clock,
  Sunrise,
  BellRing,
  CalendarDays,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center p-8">
          <CloudSun size={40} className="mx-auto mb-3" />
          <h1 className="text-3xl font-bold">Weather Predictor</h1>
          <p className="text-sm opacity-90 mt-2">
            A modern weather forecasting application built with React and
            Tailwind CSS
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Weather Predictor is a modern weather forecasting application that
            provides accurate and easy-to-understand weather information. Users
            can search weather by city name or use their current location to
            view detailed weather data including hourly forecasts, weekly
            forecasts, sunrise and sunset timings, and important government
            weather alerts.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <MapPin className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">City & Location Search</h3>
                <p className="text-sm text-gray-600">
                  Search weather for any city worldwide or use your current
                  location.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <Clock className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">3-Hour Forecast</h3>
                <p className="text-sm text-gray-600">
                  Get detailed weather predictions for every 3 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <CalendarDays className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">5-Day Forecast</h3>
                <p className="text-sm text-gray-600">
                  View weather predictions for the upcoming five days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <Sunrise className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">Sunrise & Sunset</h3>
                <p className="text-sm text-gray-600">
                  Track daily sunrise and sunset timings for your location.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <BellRing className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">Government Weather Alerts</h3>
                <p className="text-sm text-gray-600">
                  Receive important weather notifications and alerts issued by
                  authorities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <CloudSun className="text-yellow-500" />
              <div>
                <h3 className="font-semibold">Real-Time Weather</h3>
                <p className="text-sm text-gray-600">
                  View live temperature, weather conditions, and environment
                  details.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-10 text-gray-500 text-sm">
            Built using React, Tailwind CSS, and Weather API to deliver fast and
            accurate weather insights.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
