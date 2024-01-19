import React, { memo, useCallback, useState } from "react";

var a = 1;
const Counter = () => {
  const [count, setCount] = useState(0);

  //! useCallback()

  const a = useCallback(function () {
    console.log("Hi there");
  }, []);

  return (
    <div>
      Count is {count}
      <br />
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Count Inc
      </button>
      <Demo a={a} />
    </div>
  );
};

const Demo = memo(function ({ a }) {
  console.log("rerender");
  return <div>Hi there {a}</div>;
});
export default Counter;
