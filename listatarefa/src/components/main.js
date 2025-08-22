//Função: conter a lógica e a interface de uma parte específica da aplicação (no caso, a lista de tarefas).

//todo arquivo js precisa importar o react
import React, { Component } from 'react';
import './main.css'

//impota os componentes que serão usados(formulario e lista de tarefas)
import Form from './Form';
import Tarefas from './Tarefas';

//a classe main esta sendo exportada com os atributos da classe Component do react
export default class Main extends Component {

  state = {
    novoTexto: '',
    tarefas:[],
    index: -1
  }

  //é necessario ser arrow function para o this funcionar
  inputEdit = (e) => {
    this.setState({
      novoTexto: e.target.value //o valor do target(input) é atribuido a chave novoTexto
    })
  }

  addTarefas = (e) => {
    e.preventDefault() //evita de recarregar a pagina
    if(this.state.novoTexto.trim() === '') return; //se o input estiver vazio, não faz nada

    if(this.state.index === -1){
      //copia todos os valores ja gravados no array e add o novo texto digitado pelo usuario
      this.setState({
        tarefas: [...this.state.tarefas,this.state.novoTexto], //seta o novo texto no array de tarefas
        novoTexto: '' //limpa o texto
      }, () => {
        this.SalvarLocal(this.state.tarefas) //salva o array atualizado no localStorage(com callBack)
      })
    }else{
      const { tarefas,novoTexto,index } = this.state

      const novasTarefas = [...tarefas] //copia o array original para uma variavel
      novasTarefas[index] = novoTexto //atribui o novo texto ao indice do array que foi editado

      //seta os novos valores
      this.setState({
        tarefas:[...novasTarefas],
        novoTexto: '',
        index:-1,
      }, () => {
        this.SalvarLocal(this.state.tarefas) //salva o array atualizado no localStorage(com callBack)
      })
    }
  }

  deleteTarefa = (e,indice) => {
    const { tarefas } = this.state
    tarefas.splice(indice,1)

    //copia os elementos do array modificado para o original
    this.setState({
      tarefas:[...tarefas]
    },() => {
      this.SalvarLocal(this.state.tarefas)
    })
  }

  editTarefa = (e,indice) => {
    const { tarefas} = this.state

    this.setState({
      index:indice,
      novoTexto: tarefas[indice]
    })
  }

  SalvarLocal = (array) => {
    localStorage.setItem('tarefas',JSON.stringify(array))
  }

  RecuperarDados = () => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    if(!tarefas) return

    this.setState({
      tarefas:tarefas
    })
  }

  componentDidMount() { //é executado quando o componente é montado
    this.RecuperarDados() //chama a função para recuperar os dados do local
  }


  //todo codigo js no 'html' deve ser escrito entre chaves({})
  render(){ //render() tem q ser usado para renderizar infos na pagina
    const {novoTexto, tarefas} = this.state

    return (
      <div className='main'>
        <h1>LISTA DE TAREFAS</h1>

        <Form 
          addTarefas={this.addTarefas}
          inputEdit={this.inputEdit}
          novoTexto={novoTexto}
        />

        <Tarefas
          tarefas={tarefas}
          editTarefa={this.editTarefa}
          deleteTarefa={this.deleteTarefa}
        />

      </div>

    )
  }
}
