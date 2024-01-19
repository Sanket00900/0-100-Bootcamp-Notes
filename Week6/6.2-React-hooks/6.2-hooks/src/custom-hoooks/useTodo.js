import { useState, useEffect } from "react";
import axios from "axios";

function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get("https://sum-server.100xdevs.com/todos");
      setTodos(response.data.todos);
    };
    fetchTodos();
  }, []);

  //   console.log(todos);

  return todos;
}

export default useTodo;
