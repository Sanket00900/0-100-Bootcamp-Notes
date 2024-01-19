function Todo({ todo }) {
  const { title, description } = todo;
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    </>
  );
}

export default Todo;
