import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Bem Vindo !</h1>
        <h2>Se cadastre para receber ofertas exclusivas ou cadastre seu produto !</h2>
      </header>
      <div className="linkButton">
        <button id="linkButtonClient">
          <Link to={'/clientes'} style={{ textDecoration: 'none', color: '#fff' }}>Cadastrar Cliente</Link>
        </button>

        <button id="linkButtonProduto">
          <Link to={'/produtos'} style={{ textDecoration: 'none', color: '#fff' }}>Cadastrar Produto</Link>
        </button>
      </div>
    </div>
  )
}