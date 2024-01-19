import axios from "axios";
import React, { useEffect, useState } from "react";

function TodoID({ id }) {
  const [todo, setTodo] = useState({}); //! in useState give ({}) instead of ()

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axios.get(
        `https://sum-server.100xdevs.com/todo?id=${id}`,
      );
      setTodo(response.data.todo);
    };
    fetchTodo();
  }, [id]);

  //   console.log(todo);

  return (
    <>
      <br />
      ID : {id}
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </>
  );
}

export default TodoID;
