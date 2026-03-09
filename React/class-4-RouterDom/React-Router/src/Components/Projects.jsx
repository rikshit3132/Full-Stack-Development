import React from 'react'

const Projects = () => {
  const path = window?.location?.pathname;
  return (
    <>{path === "/project" && <div>Projects</div>}</>
    // <div>Contact</div>
  );
}

export default Projects