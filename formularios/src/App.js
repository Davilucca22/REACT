import { React, useEffect, useState } from 'react'
 
function App() {

  const [nome,setnome] = useState('')
  const [email,setemail] = useState('')
  const [senha,setsenha] = useState('')
  const [dados,setdados] = useState([])

  const cadastrar = (e) =>{

    e.preventDefault() 
    
    if(!nome || !email || !senha){
      alert('preencha o formulario com todos os dados!')
      return
    }

    const dadostemp = {nome:nome,senha:senha,email:email} //joga os dados passados em uma variavel temporaria
    
    setdados([...dados, dadostemp]) //copia os valores antigos do array e adiciona o novo obj

    //limpa os campos 
    setnome('')
    setsenha('')
    setemail('')
  }

  //mostra os dados no console atualizados
  useEffect(() => {
    console.log(dados)
  },[dados])


  return (
    <div>
    <form name='fomulario' onSubmit={ e => cadastrar(e)} >
      <input type="text" placeholder="Nome..."  value={nome} onChange={e => setnome(e.target.value)}></input>
      <input type="email" placeholder="E-Mail..." value={email} onChange={e => setemail(e.target.value)}></input>
      <input type="password" placeholder="senha..." value={senha} onChange={e => setsenha(e.target.value)}></input>
      <button typeof='submit'>submit</button>
    </form>
    <div>
      <ul>
        {dados.map(e => (
          <li key={e.nome}>
            <h2>{e.nome}</h2>
            <h3>{e.email}</h3>
            <h3>{e.senha}</h3>
          </li>
        ))}
        </ul>
    </div>
    </div>
  );
}

export default App;
