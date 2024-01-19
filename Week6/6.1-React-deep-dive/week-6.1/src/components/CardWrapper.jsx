import React from "react";

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "5px",
      }}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
