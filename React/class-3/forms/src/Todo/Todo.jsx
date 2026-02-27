import React, { useState } from "react";

const Todo = () => {
  const [inputVal, setVal] = useState("");
  const [todos, setTodos] = useState([]);
  const addList = () => {
    if (inputVal.trim() === "") return;
    setTodos([...todos, inputVal]); // add new item
    setVal(""); // clear input
  };
  const deleteItem = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setVal(e.target.value)}
      ></input>
      <button onClick={addList}>Add Text</button>
      <ul>
        {todos.map((todo, idx) => {
       return (<li key={idx}>
            {todo}
            <button onClick={() => deleteItem(idx)}>Delete</button>
          </li>
       );
        })}
      </ul>
    </div>
  );
};

export default Todo;
