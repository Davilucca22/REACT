import React from 'react'
import './style.css'

export default function Div({card}){
    return(
    <section>
        <ul id='lista'>
            {card.map((el)=>
                <li id='card' key={el.titulo}>
                    <h1>{el.titulo.toUpperCase()}</h1>
                    <p>{el.descricao}</p>
                </li>
                )}
        </ul>
    </section>
    )
}
