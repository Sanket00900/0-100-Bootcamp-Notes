// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

import TodosWrapper from "./components/TodosWrapper-useEffect";
import TodoID from "./components/TodoID";
import { useState } from "react";
import CountSum from "./components/CountSum-useMemo";
import Counter from "./components/Counter-useCallback";
import Tax from "./components/tax-useRef";

function App() {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <>
      {/*
      <TodosWrapper />
    
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <button onClick={() => setSelectedId(4)}>4</button>
      <button onClick={() => setSelectedId(5)}>5</button>
      <button onClick={() => setSelectedId(6)}>6</button>
      <button onClick={() => setSelectedId(7)}>7</button>
      <button onClick={() => setSelectedId(8)}>8</button>
      <button onClick={() => setSelectedId(9)}>9</button>
      <br />
      <TodoID id={selectedId} />
    
       <CountSum />
     
      <Counter />
         */}
      <Tax />
    </>
  );
}

export default App;
