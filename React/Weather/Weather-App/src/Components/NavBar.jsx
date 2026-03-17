import React from 'react'
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white  backdrop-blur-sm shadow-md ">
      <div className="flex items-center gap-12">
        <NavLink to="/">
          <img
            className="w-[30px] m-3 text-2xl text-white hover:text-yellow-400 transition duration-300"
            src="https://cdn-icons-png.flaticon.com/512/6368/6368753.png"
            alt="Weather Logo"
          ></img>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-xl transition duration-300 ${
              isActive
                ? "text-yellow-400"
                : "text-white hover:text-yellow-400 transition duration-300"
            }`
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-xl transition duration-300 ${
              isActive
                ? "text-yellow-400"
                : "text-white hover:text-yellow-400 transition duration-300"
            }`
          }
          to="/about"
        >
          About Me
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-xl transition duration-300 ${
              isActive
                ? "text-yellow-400"
                : "text-white hover:text-yellow-400 transition duration-300"
            }`
          }
          to="/contact"
        >
          Contact Me
        </NavLink>
      </div>
      <div className="flex items-center gap-6 mr-20 text-2xl text-white hover:text-yellow-400 transition duration-300">
        <NavLink
          className={({ isActive }) =>
            `text-xl transition duration-300 ${
              isActive
                ? "text-yellow-400"
                : "text-white hover:text-yellow-400 transition duration-300"
            }`
          }
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar