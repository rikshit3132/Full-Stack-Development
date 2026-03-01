import React from 'react'
import Banner from './Banner'
import Movies from './Movies'
const Home = ({ watchlist, setWatchList }) => {
  return (
    <>
      <Banner />
      <Movies watchlist={watchlist} setWatchList={setWatchList} />
    </>
  );
};

export default Home