
import './App.css'
import { Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}>Home</Route>
        <Route path = '/watchlist' element = {<WatchList/>}></Route>
      </Routes>
    </>
  );
}

export default App
