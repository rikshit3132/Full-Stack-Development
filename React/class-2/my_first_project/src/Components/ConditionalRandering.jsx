import React from "react";

const ConditionalRandering = ({ isLoggedin, username }) => {
  return (
    <div>
      {isLoggedin ? (
        <h1>Hey {username}, You are Logged in!! </h1>
      ) : (
        <h1>Hey,{username}, Go and authenticate yourself firstly..</h1>
      )}
    </div>
  );
};

export default ConditionalRandering;
