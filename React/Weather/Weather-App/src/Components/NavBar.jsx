import React from 'react'
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white  backdrop-blur-sm shadow-md ">
      <div className="flex items-center gap-6">
        <NavLink to="/">
          <img
            className="w-[30px] m-3 text-white hover:text-yellow-400 transition duration-300"
            src="https://cdn-icons-png.flaticon.com/512/6368/6368753.png"
          ></img>
        </NavLink>
        <NavLink
          className="text-white hover:text-yellow-400 transition duration-300"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="text-white hover:text-yellow-400 transition duration-300"
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className="text-white hover:text-yellow-400 transition duration-300"
          to="/contact"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center gap-6 mr-20 text-white hover:text-yellow-400 transition duration-300">
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default NavBar