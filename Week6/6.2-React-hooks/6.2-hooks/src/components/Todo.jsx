import React from "react";

function Todo({ todo }) {
  const { title, description } = todo;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export default Todo;
