import React from "react";

export default function Condicional() {
  return (
    <>
      { false ? (
        <h1>verdade</h1>
      ) : true ? (
        <h3>
          <i>else</i> if
        </h3>
      ) : (
        <h2>mentira</h2>
      )}
    </>
  );
}
