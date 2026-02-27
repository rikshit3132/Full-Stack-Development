import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts';
import About from './About';
import User from './User';
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/user/:userId" element={<User />}></Route>
    </Routes>
  );
}

export default Routing