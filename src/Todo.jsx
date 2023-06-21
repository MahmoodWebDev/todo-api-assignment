import { useState } from "react";
import PropTypes from "prop-types";

// Component for displaying and adding todos for a specific project and page
const Todo = ({ project, page }) => {
  // State for the list of todos and the new todo input
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <h2>
        {project.name} - {page.name}
      </h2>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

// Define PropTypes for the Todo component
Todo.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  page: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
