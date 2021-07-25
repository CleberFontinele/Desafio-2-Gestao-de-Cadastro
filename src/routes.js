import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroProdutos from "./pages/CadastroProdutos"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/clientes' exact component={CadastroCliente} />
        <Route path='/produtos' exact component={CadastroProdutos} />
      </Switch>
    </BrowserRouter>
  )
}