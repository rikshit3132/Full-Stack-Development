import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/user/101">User 101</Link>
        <Link to="/user/202">User 202</Link>
      </ul>
    </div>
  );
}

export default NavBar