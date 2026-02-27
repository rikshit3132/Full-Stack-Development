
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './My Routers/NavBar'
import Home from './My Routers/Home';
import Contacts from './My Routers/Contacts';
import About from './My Routers/About';
import User from './My Routers/User';
function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App
