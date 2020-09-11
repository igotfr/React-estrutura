import React, { useState, useEffect, useRef } from "react";

export default function ComponentDidUpdate() {
  let [counter, setCounter] = useState<number>(0);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else console.log(`clicou ${counter} vezes`), [counter];
  });

  return (
    <>
      <button onClick={() => setCounter(++counter)}>Incrementador</button>
      <br />
      {counter}
    </>
  );
}
