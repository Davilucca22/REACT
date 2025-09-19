import {React, useState, useEffect} from "react";
import './main.css'

export default function Main(){

    let [time,setTime] = useState('00:00:00')

    useEffect(()=> {
        const intervalo = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
        
        return () => clearInterval(intervalo) /*garante que o timer seja limpo quando o componente sair da tela. */

    },[]) /* só executa o setInterval uma vez.*/  

    return(
        <div>
            <h1>Relogio Digital</h1>
            <h2>{time}</h2>
        </div>
    )
}