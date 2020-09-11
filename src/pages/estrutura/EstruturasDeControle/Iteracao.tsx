import React from "react";

export default function Iteracao() {
  const arr: Array<string> = ["moto", "carro", "avião", "fogete"];

  return (
    <>
      {arr.map((el, i) => (
        <p key={i}>{el}</p>
      ))}
    </>
  );
}
