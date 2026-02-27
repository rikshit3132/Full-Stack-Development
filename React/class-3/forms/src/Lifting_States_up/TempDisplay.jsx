import React from 'react'

const TempDisplay = ({ celTemp }) => {
    let feh = (celTemp * 9/5) + 32;
  return <div>Temp. in Fehreinheit: {feh}</div>;
};

export default TempDisplay