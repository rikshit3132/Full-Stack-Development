import React, { useState } from 'react'

const User = ({user}) => {
    const[visibility,setVisble] = useState(false);
  return (
    <div>
        <h3>User Info.</h3>
      <p>{user.name}</p>
      <p>{user.location}</p>
      <p>{user.age >= 18 ? "Adult" : "Minor"}</p>
      <img src={user.picture} alt='girl'></img>
      <br/>
      {visibility && <p>{user.email}</p>}
      <button onClick={() =>{setVisble(!visibility)}}>{visibility ? "Hide Email" : "Show Email"}</button>
    </div>
  );
}

export default User