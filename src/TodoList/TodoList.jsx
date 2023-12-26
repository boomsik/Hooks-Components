import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  return (
    <div className="todo_box">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo_value"
      />
      <button onClick={addTodo} className="todo_btn">
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
