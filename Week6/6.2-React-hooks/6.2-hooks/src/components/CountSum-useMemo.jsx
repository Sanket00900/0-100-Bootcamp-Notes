import React, { useMemo, useState } from "react";

function CountSum() {
  const [count, setCount] = useState(0);
  const [inp, setInp] = useState(1);

  const countInc = () => {
    setCount(count + 1);
  };

  //! useMemo hook

  const sum = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= inp; i++) {
      sum += i;
    }
    return sum;
  }, [inp]);

  return (
    <div>
      <h1>sdfe</h1>
      <input
        onChange={(e) => {
          setInp(e.target.value);
        }}
        placeholder="Find sum from 1 to n"
        type="text"
        name=""
        id=""
      />
      <div>
        Sum of 1 to {inp} is {sum}
      </div>
      <button onClick={countInc}>Count : {count}</button>
    </div>
  );
}

export default CountSum;
