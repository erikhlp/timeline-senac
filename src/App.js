import React, { Component } from 'react';
import {FormularioCadastro} from './components/FormularioCadastro/FormularioCadastro';
import {ListaDeNotas} from './components/ListaDeNotas/ListaDeNotas'
import './assets/App.css';
import './assets/index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {notas: []};
  }

  criarNota(titulo, texto, data) {
    const novaNota = {titulo, texto, data};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {
    document.title = 'Timeline';
    console.log("Timeline ON!");
    
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }

}

export default App;
