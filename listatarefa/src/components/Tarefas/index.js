import React from "react";

//importa os icones
import { FaEdit,FaWindowClose }  from 'react-icons/fa'

//importa o css
import './tarefas.css'

export default function Tarefas({tarefas, editTarefa, deleteTarefa}){
  return(
        <ul id='lista'>
          {tarefas.map((e,index) => (
            <li>
            {e}
            <span id={e}>
              <FaEdit  id='edit' onClick={(e) => editTarefa(e,index)} />
              <FaWindowClose onClick={(e) => deleteTarefa(e,index)} id='del' />
            </span>
          </li>
          ))}
        </ul>
  )
}
