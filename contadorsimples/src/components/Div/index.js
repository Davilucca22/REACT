import React from 'react'


export default function Div({contador,incrementar,decrementar,zerar}){
    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <button onClick={zerar}>zerar</button>
        </div>
    )
}