import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Dadospessoais />
      <Formacao />
      <Experiencia />
      <Objetivo />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 className="curriculum">Curriculum Vitae Teste</h1>

      <p>Homer Jay Simpson</p>
      <hr />
    </div>

  )
}

function Dadospessoais() {
  return (
    <div>
      <h2 className="dadospessoais">Dados Pessoais:</h2>
      <p className="p">Endereço: Rua da Alegria <br />
      Cidade: Springfield<br />
      Estado Civil: Casado<br />
      Email: Homer@email.com<br />
      </p>

      <hr />
    </div>

  )
}


function Formacao() {
  return (
    <div>

      <h3 className="formacao">Formação:</h3>
      <p className="p">Graduação:  Química </p>
      <hr />
    </div>

  )
}

function Experiencia() {
  return (
    <div>
      <h4 className="experiencia">Experiência Profissional: </h4>
      <p className="p"> Usina Nuclear Springfield</p>
      <hr />
    </div>

  )
}

function Objetivo() {
  return (
    <div>
      <h4 className="objetivo">Objetivo: </h4>
      <p className="p"> Trabalhar com doces </p>
      <hr />
    </div>

  )
}


export default App;
