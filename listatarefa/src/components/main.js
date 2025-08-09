//todo arquivo js precisa importar o react
import React, { Component } from 'react';
import './main.css'

//a classe main esta sendo exportada com os atributos da classe Component do react
export default class Main extends Component {

  state = {
    novoTexto: ''
  }

  //é necessario ser arrow function para o this funcionar
  inputEdit = (e) => {
    this.setState({
      novoTexto: e.target.value //o valor do target(input) é atribuido a chave novoTexto
    })
  }

  //todo codigo js no 'html' deve ser escrito entre chaves({})
  render(){ //render() tem q ser usado para renderizar infos na pagina
    return (
      <div className='main'>
        <h1>LISTA DE TAREFAS</h1>
        <input onChange={this.inputEdit} type='text' />
        <button type='submit'>enviar</button>
      </div>
    )
  }
}
