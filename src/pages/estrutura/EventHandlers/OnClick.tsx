import React, { useState } from "react";

export default function Onclick() {
  let [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCount(++count)}>Incrementador</button>
      <br />
      {count}
    </>
  );
}
