import React from 'react'
import "../Components/style.css"
import { Link } from "react-router-dom"
import Contacts from './Contacts';
import Projects from './Projects';
import Home from './Home';
import About from './About';
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a href="./home">Home Page</a> */}
            <Link to="./home" >
              Home Page
            </Link>
          </li>
          <li>
            {/* <a href="./about">About Page</a> */}
            <Link to="./about">
              About Page
            </Link>
          </li>
          <li>
            {/* <a href="./contact">Contact Page</a> */}
            <Link to="./contact" >
              Contact Page
            </Link>
          </li>
          <li>
            {/* <a href="./project">Project Page</a> */}
            <Link to="./project" >
              Project Page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar