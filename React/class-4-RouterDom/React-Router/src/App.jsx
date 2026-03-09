import NavBar from "./Components/NavBar.jsx"
import Home from "./Components/Home.jsx"
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import './App.css'
import { Routes,Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound.jsx";
import User from "./Components/User.jsx";

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Projects />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/user/:userId" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App
