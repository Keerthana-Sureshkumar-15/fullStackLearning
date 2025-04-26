import React, { useState } from "react";

export default function Counter() {
  //model
  const [count, setCount] = useState(0); //0 is initilixation of value

  //controler
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    //view
    <div>
      <h2>Counter : {count}</h2>
      {/* <button onClick={incrementCount}>Increment</button> */}

      {/* like below we can define simple function directly */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
