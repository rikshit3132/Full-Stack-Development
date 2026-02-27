import "./App.css";
import Mycomponent from "./Components/myComponent";
import React from "react";
import DisplayData from "./Components/DisplayData";
import ConditionalRandering from "./Components/ConditionalRandering";
import Button from "./Components/Button";
import Counter from "./Counter_app/Counter";
import Temprature from "./Temprature Calculas/Temprature";
function App() {
  //  const person = {
  //   name : 'Rahul',
  //   age: 34
  //  };
  //  let fruits = ['banana','orange','apple'];
  // const message = "Hello from React";
  return (
    <>
      {/* <div>React Project</div> */}
      {/* Simple props single value passing */}
      {/* <Mycomponent message="Hello from React - 1" />
      <Mycomponent message="Hello from React - 2" />
      <Mycomponent message="Hello from React - 3" />
      <Mycomponent  /> */}

      {/* whole object is passing as props */}
      {/* <DisplayData person = {person}/> */}

      {/* Passing array as props */}
      {/* <DisplayData fruits = {fruits}/> */}

      {/* conditional Randering */}
      {/* <ConditionalRandering isLoggedin={false} username={"Rahul"} /> */}
    
    {/* Add button and when click alert Hello from react */}
  
    {/* <Button message = {message}/> */}


    {/* counter app */}
    {/* <Counter/> */}

    {/* Temprature app */}
    <Temprature/>
    
    </>
  );
}

export default App;
