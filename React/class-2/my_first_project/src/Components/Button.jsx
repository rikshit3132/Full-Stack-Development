import React from 'react'
import App from '../App'
const Button = ({ message }) => {
  const handleButton = () => {
    alert(`${message}`);
  };
  return (
    <div>
      <button onClick={handleButton}>Submit</button>
    </div>
  );
};

export default Button