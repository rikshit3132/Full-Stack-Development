import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const userId = 5;
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home Page</Link>
        </ul>
        <ul>
          <Link to="/about">About Page</Link>
        </ul>
        <ul>
          <Link to="/contacts">Contacts Page</Link>
        </ul>
        <ul>
          <Link to={`user/${userId}`}>User Page</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Home