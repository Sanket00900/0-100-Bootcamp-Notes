import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleClickDash = () => {
    navigate("/dashboard");
  };

  const handleClickCnt = () => {
    navigate("/count");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        background: "black",
        color: "white",
        gap: "20px",
      }}
    >
      <button onClick={handleClick}>Home</button>
      <button onClick={handleClickDash}>Dashboard</button>
      <button onClick={handleClickCnt}>Count</button>
    </div>
  );
}

export default Navbar;
