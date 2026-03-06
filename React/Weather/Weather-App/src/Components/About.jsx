import React from "react";
import { CloudSun, MapPin, Clock, Sunrise } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center p-8">
          <CloudSun size={40} className="mx-auto mb-3" />
          <h1 className="text-3xl font-bold">Weather Predictor</h1>
          <p className="text-sm opacity-90 mt-2">
            A modern weather forecasting app built with React
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Weather Predictor helps users quickly check real-time weather
            conditions for cities around the world. You can search by city name
            or use your current location to view temperature, weather
            conditions, and important daily information like sunrise and sunset
            times.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <MapPin className="text-sky-500" />
              <div>
                <h3 className="font-semibold">City Search</h3>
                <p className="text-sm text-gray-600">
                  Search weather for any city around the world.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <Clock className="text-sky-500" />
              <div>
                <h3 className="font-semibold">Local Time</h3>
                <p className="text-sm text-gray-600">
                  Displays local time of the selected city.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <CloudSun className="text-sky-500" />
              <div>
                <h3 className="font-semibold">Live Weather</h3>
                <p className="text-sm text-gray-600">
                  Shows real-time temperature and conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition">
              <Sunrise className="text-sky-500" />
              <div>
                <h3 className="font-semibold">Sunrise & Sunset</h3>
                <p className="text-sm text-gray-600">
                  Track daily sunrise and sunset timings.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-10 text-gray-500 text-sm">
            Built using React, Tailwind CSS and Weather API.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
