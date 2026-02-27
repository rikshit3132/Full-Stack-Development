import React, { useEffect } from 'react'
import { useState } from 'react';
const UseEffect = () => {
    const[count,setCount] = useState(0);
   
    // 3 types of useEffect use
    // 1.Passing nothing in parameter(e.g )
    // when nothing is passed as argument in useEffect func.
    // it re-renders updation in component numbers of time.
    // useEffect(() =>{
    //     console.log("Iam inside useEffect");
    // })
    
    // 2.passing empty array in parameter(e.g [])
    // when array is passed as an argument it runs only once
    // intially.
    // useEffect(() => {
    //   console.log("Iam inside useEffect");
    // }, []);
    // 3.passing variable in parameter (e.g count)
    // When there is an variable passed in an argument
    // it renders when that variables values get changed.
    // There can be more than one variables allowed in 
    // argument as an array.
    // useEffect(() =>{
    //     console.log("Iam inside useEffect");
    // },[count])
     useEffect(() => {
       console.log("Iam inside useEffect");
     }, [count]);
    
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect