import React from 'react'

const TempInputs = ({ celTemp,handleTemp }) => {
  return (
    <div>
      <label htmlFor="cel">Temp. in Celcius</label>
      <input id="cel" value={celTemp} onChange={(e) => handleTemp(e.target.value)}></input>
    </div>
  );
};

export default TempInputs