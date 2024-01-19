import axios from "axios";
import {useEffect, useState} from "react";

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
