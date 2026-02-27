import React from 'react'
import App from '../App'
const DisplayData = ({fruits}) => {
  return (
    <>
      {/* persons obj data is printed over here */}
      {/* <h4>Persons info: </h4>
      <div>{person?.name}</div>
      <div>{person?.age }</div>
      <div>{person?.height}</div> */}
      <ul>
       {
        fruits?.map((fruit,idx) =>{
            return <li key = {idx}>{fruit}</li>;
        })
       }
      </ul>
    </>
  );
}

export default DisplayData