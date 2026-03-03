import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
// import { useParams, useSearchParams } from "react-router-dom";
const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  // const userId = useParams();
  // console.log(userId);
  // const [searchParams,setParams] = useSearchParams();
  // console.log(searchParams.get('name'))
  //  console.log(searchParams.get("age"));
  // const {userId} = useParams();
  useEffect(() => {
    const result = async () => {
      const data = await fetch(`https://fakestoreapi.com/users/`);
      const formattedData = await data.json();
      console.log(formattedData)
      setAllUsers(formattedData);
    };
    result();
  }, []);
  
  return (
    <div>
      <UserCard users = {allUsers}/>
    </div>
  );
};

export default User;
