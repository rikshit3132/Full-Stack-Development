import React from 'react'

const Contact = () => {
    const path = window?.location?.pathname;
  return (
    <>{path === "/contact" && <div>Contact</div>}</>
    // <div>Contact</div>
  );
}

export default Contact