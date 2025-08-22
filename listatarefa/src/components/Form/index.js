import React from "react";

//form
import { FaPlus }  from 'react-icons/fa'

import './Form.css'

export default function Form({ addTarefas, inputEdit, novoTexto }) {
  return (
    <form action="#" onSubmit={(e) => { addTarefas(e) }} className='form'>
      <input onChange={inputEdit} type='text' value={novoTexto} />
      <button type='submit'><FaPlus /></button>
    </form>

  )
}
