//Função: conter a lógica e a interface de uma parte específica da aplicação (no seu caso, a lista de tarefas).

//todo arquivo js precisa importar o react
import React, { Component } from 'react';
import './main.css'

//form
import { FaPlus }  from 'react-icons/fa'

//tarefas
import { FaEdit,FaWindowClose }  from 'react-icons/fa'

//a classe main esta sendo exportada com os atributos da classe Component do react
export default class Main extends Component {

  state = {
    novoTexto: '',
    tarefas:[],
    index: -1
  }

  //é necessario ser arrow function para o this funcionar
  inputEdit = (e) => { //isso é uma funçao ta?
    this.setState({
      novoTexto: e.target.value //o valor do target(input) é atribuido a chave novoTexto
    })
  }

  addTarefas = (e) => {
    e.preventDefault() //evita de recarregar a pagina
    if(this.state.novoTexto.trim() === '') return;

    if(this.state.index === -1){
      //copia todos os valores ja gravados no array e add o novo texto digitado pelo usuario
      this.setState({
        tarefas: [...this.state.tarefas,this.state.novoTexto],
        novoTexto: '' //limpa o texto
      }, () => {
        this.SalvarLocal(this.state.tarefas) //salva o array atualizado no localStorage(com callBack)
      })
    }else{
      const { tarefas,novoTexto,index } = this.state

      const novasTarefas = [...tarefas]
      novasTarefas[index] = novoTexto

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
      <div className='conteiner'>

      <div className='main'>
        <h1>LISTA DE TAREFAS</h1>
        <form action="#" onSubmit={(e) => {this.addTarefas(e)}} className='form'>
          <input  onChange={this.inputEdit} type='text' value={novoTexto} />
          <button type='submit'><FaPlus /></button>
        </form>

        <ul id='lista'>
          {tarefas.map((e,index) => (
            <li>
            {e}
            <span id={e}>
              <FaEdit  id='edit' onClick={(e) => this.editTarefa(e,index)} />
              <FaWindowClose onClick={(e) => this.deleteTarefa(e,index)} id='del' />
            </span>
          </li>
          ))}
        </ul>
      </div>

      </div>
    )
  }
}
