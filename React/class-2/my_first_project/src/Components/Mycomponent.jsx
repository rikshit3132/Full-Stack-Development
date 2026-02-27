import React from "react";
import "./style.css";
const myComponent = ({message = "default Message"}) => {
 return (
  <>
  <h1 id="heading">{message}</h1>
  </>
 );
};

export default myComponent;
