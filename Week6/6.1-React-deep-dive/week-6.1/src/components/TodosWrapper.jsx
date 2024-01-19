import { useEffect, useState } from "react";
import axios from "axios";
import Todo from "../components/Todo";

function TodosWrapper() {
  const [todos, setTodos] = useState([]);

  //* Fetching TODOs from Backend

  useEffect(() => {
    setInterval(() => {
      const fetchTodos = async () => {
        const response = await axios.get(
          "https://sum-server.100xdevs.com/todos"
        );
        setTodos(response.data.todos);
      };
      fetchTodos();
    }, 10 * 1000);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todos !</h1>
      <div style={{ padding: "20px" }}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TodosWrapper;
