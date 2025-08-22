import React, { useState } from 'react'

import Div from './Div/index'

export default function Main(){
    let [contador,setContador] = useState(0)

    function incrementar(){
        setContador(contador += 1)
    }

    function decrementar(){
        if(contador === 0) return
        setContador(contador -= 1)
    }

    function zerar(){
        setContador(contador = 0)
    }

    return(
        <Div 
            contador={contador}
            incrementar={incrementar}
            decrementar={decrementar}
            zerar={zerar}
        />
    )
}