import React, { useState } from 'react'

import Div from './Div/index'

//exporta o Main para ser usado no App.js
export default function Main(){
    //name é o valor do estado,setName é a funçao para atualizar esse estado
    const [name, setName] = useState("Joao")
    return (
       <Div //usa a Div importada de index.js
            name={name}
        />
    )
}
