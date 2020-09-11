import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <>
      <Link to="/">Links</Link>

      <h3>Event Handlers</h3>
      <Link to="/onclick">onClick</Link>
      <br />
      <Link to="/twowaydatabind">Two Way Data Bind</Link>
      <br />
      <Link to="/formulario">Formulario</Link>
      <br />

      <h3>Estruturas de Controle</h3>
      <Link to="/condicional">Condicional</Link>
      <br />
      <Link to="/repeticao">Repetição</Link>
      <br />
      <Link to="/iteracao">Iteração</Link>

      <h3>Life Cycle</h3>
      <Link to="/componentdidmount">componentDidMount</Link>
      <br />
      <Link to="/componentdidupdate">componentDidUpdate</Link>
      <br />
      <Link to="/componentdidmountnupdate">ComponentDidMountNUpdate</Link>

      <h3>Hooks</h3>
      <Link to="/useref">useRef</Link>
    </>
  );
}
