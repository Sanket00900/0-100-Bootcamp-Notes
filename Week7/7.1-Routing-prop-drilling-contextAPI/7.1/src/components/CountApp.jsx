import { useContext, useState } from "react";
import { CountContext, SetCountContext } from "../contexts/CountContext";

/*

        CountApp

          Count

  Buttons     CountRender

*/

function CountApp() {
  const [count, setCount] = useState(0);

  return (
    //TODO : wrap anyone that wants to use the teleported value insdide a provider

    <div>
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={setCount}>
          <Count />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </div>
  );
}

//! -----------------------------

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

//! -----------------------------

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

//! -----------------------------

function Buttons() {
  const setCount = useContext(SetCountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default CountApp;
