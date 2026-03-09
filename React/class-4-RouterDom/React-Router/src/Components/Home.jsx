import React from 'react'

const Home = () => {
  const path = window?.location?.pathname;
  return (
    <>{path === "/" && <div>Home</div>}</>
    // <div>Contact</div>
  );
}

export default Home