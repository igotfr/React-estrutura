import React from "react";

export default function Repeticao() {
  return <>{Array(3).fill(<p>paragrafo</p>)}</>;
}
