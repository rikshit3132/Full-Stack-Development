import React, { useState } from "react";
import './style.css';
const TempratureDisplay = () => {
    let[celVal,setcel] = useState(0);
    let[fehVal,setFeh] = useState(0);
    const changeTemp = ()=>{
        setFeh(celVal * 9/5 + 32);
        setcel(0);
    }
  return (
    <div>
      <h2 id="main_heading" className="main_heading">
        Temprature Calculator
      </h2>
      <div className="temp_input">
        <label className="label1" htmlFor="cel">
          In celcius:
        </label>
        <input
          type="number"
          id="cel"
          value={celVal}
          onChange={(e) => setcel(e.target.value)}
        ></input>
        <h3 className="fehDisplay">
          In Fahrenheit:<span className="display"> {fehVal}</span>
        </h3>
      </div>
      <button className="btn" onClick={changeTemp}>
        Convert
      </button>
    </div>
  );
};

export default TempratureDisplay;
