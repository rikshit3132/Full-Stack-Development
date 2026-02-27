import React, { useState } from 'react'
import TempInputs from './Lifting_States_up/TempInputs'
import TempDisplay from './Lifting_States_up/TempDisplay'

const AppTemp = () => {
    const[celTemp,setTemp] = useState(null);
    // const handleTemp = (newTemp)=>{
    //     setTemp(newTemp);
    // }
  return (
    <div>
      <TempInputs celTemp={celTemp} handleTemp={setTemp} />
      <TempDisplay celTemp={celTemp} />
    </div>
  );
}

export default AppTemp