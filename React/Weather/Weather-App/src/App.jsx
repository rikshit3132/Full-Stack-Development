
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { Routes,Route } from "react-router-dom";
import About from "./Components/About"
import Contact from './Components/Contact';
function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  );
}

export default App
