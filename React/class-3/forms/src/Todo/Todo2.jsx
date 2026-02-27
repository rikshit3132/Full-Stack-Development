import React, { useState } from "react";

const Todo2 = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    if (inputVal.trim() === "") {
      return;
    }
    setTodos([...todos, inputVal]);
    setInputVal("")
  };
  const deleteItem = (idx) => {
    const updated = todos.filter((_, i) => i !== idx);
    setTodos(updated);
  };
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>

      <button onClick={handleClick}>Add item</button>
      <ul>
        {todos.map((todo, idx) => {
         return( <li key={idx}>
            {todo}
            <button onClick={()=>deleteItem(idx)}>Delete</button>
          </li>
         );
        })}
      </ul>
    </div>
  );
};

export default Todo2;
