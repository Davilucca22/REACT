import { Component } from 'react';
import Classe from './components/class/class';
import './App.css';

class Usuario extends Component{
  render(){
    return(
      <div>
        <h2>Nome de Usuario:{this.props.nome}</h2> {/*aqui eu  defino onde e como sera usada a prop*/}
        <h3>Email Cadastrado:{this.props.email}</h3>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Usuario nome="Davi Lucas" email="Davilucarios47@gmail.com"/> {/*aqui eu defino o valor da prop*/}
      <Classe senha="12345" />
    </div>
  );
}

export default App;
