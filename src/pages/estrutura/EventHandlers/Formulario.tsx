import React, { useState } from "react";

export default function Formulario() {
  const [numero, setNumero] = useState<number>(0);
  const [soma, setSoma] = useState<number>(0);

  return (
    <form
      onSubmit={(e) => {
        setSoma(soma + Number(numero));
        e.preventDefault();
      }}
    >
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <br />
      {numero}
      <br />
      {soma}
      <br />
      <input type="submit" value="Adicionar" />
      <input type="button" value="Reset" onClick={() => setSoma(0)} />
    </form>
  );
}
