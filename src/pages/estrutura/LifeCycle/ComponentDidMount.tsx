import React, { useState, useEffect } from "react";

export default function ComponentDidMount() {
  let [counter, setCounter] = useState<number>(0);

  useEffect(() => console.log(`clicou ${counter} vezes`), []);

  return (
    <>
      <button onClick={() => setCounter(++counter)}>Incrementador</button>
      <br />
      {counter}
    </>
  );
}