import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
const User = () => {
  const [userId] = useParams();
  console.log(userId);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>

      <p>
        <strong>Name:</strong> {user.name.firstname} {user.name.lastname}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>City:</strong> {user.address.city}
      </p>
    </div>
  );
};
export default User