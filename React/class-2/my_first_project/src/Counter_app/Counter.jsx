import React,{useState} from "react";
import "./style.css";
const Counter = () => {
    let [count,setCount] = useState(0);
    let[inc_dec,setIncDec] = useState(1);
    const addclickHandler = ()=>{
        // console.log("add click is called!!");
        // setCount(count+ parseInt(inc_dec));
        // console.log(count);
        setCount((prevCount) => {
            return prevCount + parseInt(inc_dec);
        });
    }
    const subtractclickHandler = ()=>{
        // console.log("Subtract click is called!!");
        // if(count - parseInt(inc_dec) < 0){
        //     alert("Value < 0  not allowed!!!");
        //     return;
        // }else{
        // setCount(count - parseInt(inc_dec));
        // console.log(count);
        // }
        if(count - parseInt(inc_dec) < 0){
            alert("Value < 0  not allowed!!!");
            return;
        }else{
        setCount((prevCount) => {
            return prevCount - parseInt(inc_dec);
        });
    }
    }
    const resetclickHandler = ()=>{
        console.log("reset click is called!!");
        setIncDec(1);
        setCount(0);
        // console.log(count);
    }
    const inc_dec_Handler = (e)=>{
        setIncDec(e.target.value);
    }
  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <div id="label_input">
        <label htmlFor="increment_decrement">Inc/Dec by: </label>
        <input
          type="number"
          id="increment_decrement"
          className="values"
          placeholder="0"
          value={inc_dec}
          onChange={inc_dec_Handler}
        />
      </div>
      <div className="display">
        <h2 id="display_val">{count}</h2>
      </div>
      <div className="buttons">
        <button id="plus" onClick={addclickHandler}>
          +
        </button>
        <button id="minus" onClick={subtractclickHandler}>
          -
        </button>
        <button id="reset" onClick={resetclickHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
