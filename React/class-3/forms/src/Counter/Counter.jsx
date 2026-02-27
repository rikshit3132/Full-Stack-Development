import React, { useState } from 'react'

const Counter = ({count}) => {
    let [countVal,setCount] = useState(count);
  return (
    <div>
      <h3>{countVal}</h3>
      <button
        onClick={() => {
          setCount(++countVal);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
            if(countVal > 0){
          setCount(--countVal);
            }
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >Reset</button>
    </div>
  );
}

export default Counter