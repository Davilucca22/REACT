import {useCallback , useMemo, useEffect, useState} from "react";

function App() {
  const [texto,setTexto] = useState('')
  const [cont,setCont] = useState(0)
  const [lista,setlista] = useState(() => { //assim que inicia, lista ja recupera os dados do localstorage
    try{
      const listaLocal = localStorage.getItem('lista') //sempre tratar localstorage com try/catch
      return listaLocal ? JSON.parse(listaLocal) : []; //se tiver algo em 'lista' ele sera convertido em parse, senao retorna um array vazio 
    }catch{
      return []
    }
  })

  const addLista = useCallback(() =>{ //executa em segundo plano  

    setlista([...lista,texto])
    setTexto('')
  },[lista,texto]) //só executa quando lista e texto mudarem

  useMemo(() => {
    setCont(lista.length) //toda vez que a lista for alterada, useMemo vai executar lendo o tamanho da lista 
  },[lista]) //só executa quando lista mudar

  useEffect(() => {
    try{
      localStorage.setItem('lista',JSON.stringify(lista))  //passa os valores do array lista para o localstorage 
    }catch{}
  },[lista])

  return (
    <div>
      <form onSubmit={addLista}>
        <input type="text" placeholder="digite algo..." value={texto} onChange={(e => setTexto(e.target.value))}></input>
        <button type="submit">Enviar</button>
      </form>

      <div>
        <ul>
          {lista.map(e =>(
            <li key={e}>{e}</li>
          ))}
        </ul>
        <h2>existem {cont} itens na lista</h2>
      </div>
    </div>
  );
}

export default App;
