import { Component } from "react";

//mesmo exemplo do app.js mas agora eu exporto a classe para o app.js
export default class Classe extends Component{
    render(){
        return(
            <div>
                <h3>Senha de Acesso:{this.props.senha}</h3>
            </div>
        )
    }
}
