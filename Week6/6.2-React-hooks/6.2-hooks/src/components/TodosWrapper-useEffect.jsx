import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";
import useTodo from "../custom-hoooks/useTOdo";

function TodosWrapper() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const response = await axios.get("https://sum-server.100xdevs.com/todos");
  //     setTodos(response.data.todos);
  //   };
  //   fetchTodos();
  // }, []);

  // //   console.log(todos);

  //! Using custom Hook called useTodo()
  const todos = useTodo();

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default TodosWrapper;
