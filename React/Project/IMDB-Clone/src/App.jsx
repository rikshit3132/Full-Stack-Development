
import './App.css'
import { Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
import { useState } from 'react';
function App() {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmQ4ZGIyNzgzNjg5MGFkOWZjMjNhMjhiYzhhMmU3MyIsIm5iZiI6MTc1MjU5OTE5My45MTIsInN1YiI6IjY4NzY4YTk5YzVkZDk3ZmQ2ZGE3YjMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wa_mUt085wsYAV6Nu_CG0TYdSvFoRL9n4oTWa9OvW7A",
  //   },
  // };

  // fetch(
  //   "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  //   options,
  // )
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
    const [watchlist, setWatchList] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home watchlist={watchlist} setWatchList={setWatchList} />}
        >
          Home
        </Route>
        <Route
          path="/watchlist"
          element={
            <WatchList watchlist={watchlist} setWatchList={setWatchList} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App
