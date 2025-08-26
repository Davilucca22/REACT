import { React,useState} from 'react'

export default function Input({addOBJ}){
    const [titulo,setTitulo] = useState('')
    const [descricao,setDescricao] = useState('')

    function Handlesubmit(e){
        e.preventDefault()

        addOBJ(titulo,descricao)
        
        setTitulo('')
        setDescricao('')
    }

    function clear(){
        const inp = document.querySelectorAll('input')
        inp.forEach(e => e.value = '')
    }

    return(
        <form onSubmit={e => {Handlesubmit(e); clear()}} >
            <input type='text' placeholder='titulo...' onChange={ e => setTitulo(e.target.value)} ></input>
            <input type='text' placeholder='descriçao...' onChange={e => setDescricao(e.target.value)}></input>
            <button type='submit'>add</button>
        </form>
    )
}
