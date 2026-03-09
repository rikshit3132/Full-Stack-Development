import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            <Link to="/contact">Contact Page</Link>
          </li>
          <li>
            <Link to="/project">Project Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar