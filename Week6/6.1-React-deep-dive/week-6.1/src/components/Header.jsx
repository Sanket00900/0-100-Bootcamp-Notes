import PropTypes from "prop-types";
import { useState } from "react";

function Header({ initialTitle }) {
  const [title, setTitle] = useState(initialTitle);
  function onClickHandler() {
    setTitle("Hello from " + Math.random());
  }

  return (
    <>
      <button onClick={onClickHandler}>Click me to change the title</button>
      <h1> {title} </h1>
    </>
  );
}

Header.propTypes = {
  initialTitle: PropTypes.string.isRequired,
};

export default Header;
