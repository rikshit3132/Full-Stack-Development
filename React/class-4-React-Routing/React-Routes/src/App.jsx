// import Home from "./Components/Home";
import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
// import Contacts from "./Components/Contacts";
// import Projects from "./Components/Projects";
// import About from "./Components/About";
import { Route,Routes } from "react-router-dom"
import PageNotFound from "./Components/PageNotFound";
import User from "./Components/User";
import Product from "./Components/Product";
import { Suspense } from "react";
const Home = React.lazy(() => import("./Components/Home"));
const About = React.lazy(() => import("./Components/About"));
const Contact = React.lazy(() => import("./Components/Contacts"));
const Project = React.lazy(() => import("./Components/Projects"));
function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/project" element={<Project />}></Route>
          {/* <Route path="/user/:userId" element={<User />}></Route> */}
          <Route path="/users" element={<User />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/products/:pId" element={<Product />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
