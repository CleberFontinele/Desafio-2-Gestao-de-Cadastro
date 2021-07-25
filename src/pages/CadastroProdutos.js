import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastroProdutos() {
  const [nome, setNome] = useState('')
  const [codigo, setCodigo] = useState('')
  const [fabricante, setFabricante] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = ((e) => {
    e.preventDefault();

    let data = {
      codigo,
      nome,
      fabricante,
      quantidade,
      descricao,
    }
    let convertData = JSON.parse(localStorage.getItem("Produtos"));
    let dados = localStorage.getItem("Produtos") !== null ? convertData : []
    dados.push(data);

    localStorage.setItem("Produtos", JSON.stringify(dados));
    alert(`Produto: ${data.nome} cadastrado com sucesso!`);
    document.querySelector('#form-produto');
  })

  const handleNomeChange = (e) => setNome(e.target.value)
  const handleCodigoChange = (e) => setCodigo(e.target.value)
  const handleFabricanteChange = (e) => setFabricante(e.target.value)
  const handleQuantidadeChange = (e) => setQuantidade(e.target.value)
  const handleDescricaoChange = (e) => setDescricao(e.target.value)

  return (
    <div id="produto">
      <form action="form-produto" onSubmit={handleSubmit}>
        <div><label htmlFor="codigo-produto">Código:</label>
          <input
            id="codigo-produto"
            type="number"
            placeholder="Código do Produto"
            value={codigo}
            onChange={handleCodigoChange}
          />
        </div>

        <div>
          <label htmlFor="nome-produto">Nome</label>
          <input
            id="nome"
            type="nome"
            placeholder="Nome do Produto"
            value={nome}
            onChange={handleNomeChange}
          />
        </div>

        <div>
          <label htmlFor="fabricante">Fabricante:</label>
          <input
            id="fabricante"
            type="fabricante"
            placeholder="Fabricante"
            value={fabricante}
            onChange={handleFabricanteChange}
          />
        </div>

        <div>
          <label htmlFor="qtd-produto">Quantidade:</label>
          <input
            id="quantidade"
            type="number"
            placeholder="Quantidade do Produto"
            value={quantidade}
            onChange={handleQuantidadeChange}
          />
        </div>

        <div>
          <label htmlFor="descricao-produto">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            cols="47"
            rows="5"
            placeholder="Descreva o seu produto"
            value={descricao}
            onChange={handleDescricaoChange}
          >
          </textarea>
        </div>

        <div>
          <label htmlFor="reset">Limpar:</label>
          <input id="reset" type="reset" />
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
          <Link to={'/clientes'} style={{ textDecoration: 'none', color: '#fff' }}>Cadastrar Cliente</Link>
        </button>
      </div>
    </div>
  );
}
