import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function CadastroCliente() {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')

  const handleSubmit = ((e) => {
    e.preventDefault();

    let data = {
      nome,
      email,
      endereco,
      telefone,
    }

    // if (dados == null) {
    //   localStorage.setItem("Clientes", "[]");
    //   dados = [];
    // }
    let convertData = JSON.parse(localStorage.getItem("Clientes"));
    let dados = localStorage.getItem("Clientes") !== null ? convertData : []
    dados.push(data);

    localStorage.setItem("Clientes", JSON.stringify(dados));
    alert(`Cliente: ${data.nome} cadastrado com sucesso!`);
    document.querySelector('#form-cliente');
  })
  
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleNomeChange = (e) => setNome(e.target.value)
  const handleEnderecoChange = (e) => setEndereco(e.target.value)
  const handleTelefoneChange = (e) => setTelefone(e.target.value)

  return (

    <div id="cliente">
      <form action="form-cliente" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="nome"
            placeholder="Nome"
            value={nome}
            onChange={handleNomeChange}
            required
          />
        </div>

        <div>
          <label id="email" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            inputmode="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input
            id="endereco"
            type="endereco"
            placeholder="Endereço"
            value={endereco}
            onChange={handleEnderecoChange}
            required
          />
        </div>

        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            type="telefone"
            placeholder="Telefone"
            value={telefone}
            onChange={handleTelefoneChange}
            required
          />
        </div>

        <div>
          <label htmlFor="reset">Limpar:</label>
          <input id="reset" type="reset" value="Limpar"/>
        </div>

        <div class="button">
          <button>Cadastrar</button>
        </div>
      </form>
      <div className="linkButton">
        <button id="linkButtonClient">
          <Link to={'/'} style={{ textDecoration: 'none', color: '#fff' }}>Voltar</Link>
        </button>
        <button id="linkButtonProduto">
          <Link to={'/produtos'} style={{ textDecoration: 'none', color: '#fff' }}>Cadastrar Produto</Link>
        </button>
      </div>
    </div>

  );
}
