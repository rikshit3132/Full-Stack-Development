
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import WatchList from './Components/WatchList'
import {Route,Routes} from "react-router-dom"
function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </>
  );
}

export default App
