import React from 'react'

const About = () => {
  const path = window?.location?.pathname;
  return (
    <>{path === "/about" && <div>About</div>}</>
    // <div>Contact</div>
  );
}

export default About