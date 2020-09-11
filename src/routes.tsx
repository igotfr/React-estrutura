import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Links from "./pages/Links";
import Onclick from "./pages/estrutura/EventHandlers/OnClick";
import TwoWayDataBind from "./pages/estrutura/EventHandlers/TwoWayDataBind";
import Formulario from "./pages/estrutura/EventHandlers/Formulario";

import Condicional from "./pages/estrutura/EstruturasDeControle/Condicional";
import Repeticao from "./pages/estrutura/EstruturasDeControle/Repeticao";
import Iteracao from "./pages/estrutura/EstruturasDeControle/Iteracao";

import ComponentDidMount from "./pages/estrutura/LifeCycle/ComponentDidMount";
import ComponentDidUpdate from "./pages/estrutura/LifeCycle/ComponentDidUpdate";
import ComponentDidMountNUpdate from "./pages/estrutura/LifeCycle/ComponentDidMountNUpdate";

import UseRef from "./pages/estrutura/Hooks/UseRef";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Links} />
        <Route path="/onclick" component={Onclick} />
        <Route path="/twowaydatabind" component={TwoWayDataBind} />
        <Route path="/formulario" component={Formulario} />

        <Route path="/condicional" component={Condicional} />
        <Route path="/repeticao" component={Repeticao} />
        <Route path="/iteracao" component={Iteracao} />

        <Route path="/componentdidmount" component={ComponentDidMount} />
        <Route path="/componentdidupdate" component={ComponentDidUpdate} />
        <Route
          path="/componentdidmountnupdate"
          component={ComponentDidMountNUpdate}
        />

        <Route path="/useref" component={UseRef} />
      </Switch>
    </BrowserRouter>
  );
}
