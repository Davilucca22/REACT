import { React,useState } from 'react'
import  Div  from './Div/index'
import Input from './Input/index'

export default function Main(){
    const [card,setCard] = useState([])

    function addOBJ(titulo,descricao){
        if(!titulo || !descricao) return
        setCard([
            ...card,
            {titulo:titulo,descricao:descricao}
        ])
    }

    return(
        <div className='main'>
            <Input
                addOBJ={addOBJ}            
            />

            <Div 
                card={card}
            />
        </div>
    )
}
