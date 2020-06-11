import React from 'react';
import homer from './homer.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <Foto />
      <Nome />
      <Dadospessoais />
      <Formacao />
      <Experiencia />
      <Objetivo />
    </div>
  );

}



function Foto() {
  return (
    <div>
      <h1 className="foto">
        <img src={homer} /><br />

      </h1>
    </div>
  )
}


function Nome() {
  return (
    <div>
      <h1 className="curriculum">Homer Simpson</h1><br />
    </div >

  )
}

function Dadospessoais() {
  return (
    <div>
      <h2 className="dadospessoais">Dados Pessoais:
      <p>Endereço: Rua Springfield 150</p>
        <p>Cidade: Springfield</p>
        <p> Tel: 11  11111111</p>
        <p>Estado Civil: Casado</p>
        <p>Email: homer@gmail.com</p>


      </h2 >

    </div >

  )
}


function Formacao() {
  return (
    <div>
      <hr />
      <h3 className="formacao">Formação:</h3>
      <p >Química </p>
      <hr />

    </div >

  )
}

function Experiencia() {
  return (
    <div>
      <h4 className="experiencia">Experiência Profissional: </h4>
      <p className="p"> Segurança Nuclear  usina Springfield</p>
      <hr />
    </div>

  )
}

function Objetivo() {
  return (
    <div>
      <h4 className="objetivo">Objetivo: </h4>
      <p className="p"> Segurança Nuclear </p>
      <hr />
    </div>

  )
}


export default App;
