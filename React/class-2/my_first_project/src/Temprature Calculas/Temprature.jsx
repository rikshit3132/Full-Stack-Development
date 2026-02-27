import React, { useState } from "react";
import "./style.css";
const Temprature = () => {
  const [celValue, updateCel] = useState(0);
  let [output, UpdateOutPut] = useState(0);
  let [set, updatedSet] = useState("f");
  function onChangeEventHandler(e) {
    updateCel(parseInt(e.target.value));
  }
  function updateUI() {
    if (isNaN(celValue)) {
      alert("Please Enter some Input Value");
      return;
    }
    updateCel(0);
    if (set === "k") {
      UpdateOutPut(celValue + 273.15);
    } else if (set === "f") {
      UpdateOutPut((celValue * 9) / 5 + 32);
    }
  }
  function setTypeTemp(e) {
    updatedSet(e.target.value);
  }
  return (
    <div className="container">
      <h1 className="heading">Temprature Converter</h1>
      <div className="input_label">
        <label className="label1" htmlFor="cel">
          Enter Temprature in Celsius:{" "}
        </label>
        <input
          type="number"
          id="cel"
          className="cel"
          value={celValue}
          onChange={onChangeEventHandler}
        />
      </div>

      <h4>converts into: </h4>
      <div>
        <select onChange={setTypeTemp}>
          <option className="temp" id="fehn" value="f">
            Fehreinheit
          </option>
          <option className="temp" id="kel" value="k">
            Kelvin
          </option>
        </select>
      </div>
      <h1 id="output">{output}</h1>
      <button className="convert" onClick={updateUI}>
        Convert
      </button>
    </div>
  );
};

export default Temprature;
