import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count.js";
import { useMemo, useState, useEffect } from "react";
import Todos from "./Todos.jsx";

function App() {
  return (
    <div>
      <RecoilRoot>
        {/* <Count /> */}
        <Todos />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("Count re-rendered !");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <NumRenderer />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  );
}

function NumRenderer() {
  const count = useRecoilValue(countAtom);
  // console.log(count);
  const isEven = useRecoilValue(evenSelector);
  return (
    <>
      <h2> {isEven == 0 ? "Count is Even" : null}</h2>
    </>
  );
}

function Buttons() {
  console.log("Buttons re-rendered !");
  const setCount = useSetRecoilState(countAtom);

  return (
    <>
      <button
        onClick={() => {
          setCount((cnt) => cnt - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount((cnt) => cnt + 1);
        }}
      >
        Increase
      </button>
    </>
  );
}

export default App;
