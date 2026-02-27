import React from 'react'
import User from './User_Info/User'

const UserData = () => {
    let obj = {
      name: "Rohit",
      location: "Delhi",
      age: 18,
      picture:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEDaMEoX0Tkzqw74YSBab3HI2czZ14hUpGxq1Wuko5h6hGPVhF",
      email: "rohit123@gmail.com",
    };
  return (
    <div>
        <User user = {obj}/>
    </div>
  )
}

export default UserData