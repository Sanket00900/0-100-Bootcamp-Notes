import { useEffect, useRef, useState } from "react";

function Tax() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10;
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Tax - useRef</h1>
      <div>
        Hi there, your income tax returns are{" "}
        <span>
          <div ref={divRef}>{incomeTax}</div>
        </span>
      </div>
    </div>
  );
}

export default Tax;
