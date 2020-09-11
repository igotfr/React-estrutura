import React, { useRef, useEffect } from "react";

export default function UseRef() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={nameInputRef} type="text" placeholder="Digite seu nome" />
    </>
  );
}
