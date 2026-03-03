import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "../assets/logo.webp"
const NavBar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 items-center pl-3 py-4">
        <li>
          <NavLink to="/" className="text-3xl font-bold text-blue-500 ">
            <img className="w-[50px]" src={logo} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className="text-3xl font-bold text-blue-500"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./watchlist"
            className="text-3xl font-bold text-blue-500 "
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            WatchList
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar