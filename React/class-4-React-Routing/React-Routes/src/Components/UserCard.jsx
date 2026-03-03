
import React from 'react'
import "./styleUserCard.css"
const UserCard = ({users}) => {
    console.log(users);
  return (
    <div className="outer ">
      {users.map((user) => {
        return (
          <div className="inner">
            <h3>
              {user?.name?.firstname} {user?.name?.lastname}
            </h3>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default UserCard