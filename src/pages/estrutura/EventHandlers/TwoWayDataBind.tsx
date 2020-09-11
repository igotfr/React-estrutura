import React, { useState } from "react";

export default function TwoWayDataBind() {
  let [valor, setValor] = useState<any>("");
  let [numero, setNumero] = useState<any>("");

  return (
    <>
      <input
        type="text"
        value={valor}
        onChange={(event) => setValor(event.target.value)}
      />
      <br />
      {valor}
      <br />
      <br />
      <input
        type="text"
        placeholder="tente digitar um caractere não numérico"
        value={numero}
        pattern="[0-9]*"
        size={28}
        onChange={(event) =>
          event.target.validity.valid && setNumero(event.target.value)
        }
      />
      <br />
      {numero}
    </>
  );
}
