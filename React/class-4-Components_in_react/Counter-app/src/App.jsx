// create a counter app
// when increasing,increase by one 
// when decreasing,decrease by one

import { useState } from "react";




function App({value}) {
  let [count, setCount] = useState(value);
  const Increment = ()=>{
    setCount(++count);
  }
  const Decrement = () => {
    if(count <= 0){
      alert("Negatives not allowed!!")
      return;
    }
    setCount(--count);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={Increment}>Incrementer</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App
