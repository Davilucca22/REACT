//Função: servir como o núcleo da aplicação, um lugar único para agrupar tudo o que vai ser mostrado.
//Centralizar vários componentes no futuro (Navbar, Footer, Sidebar, etc...)

import React from "react";
//importa  a classe main criada em main.js
import Main from "./components/main";

//importa o Css
import './App.css';

function App(){
  return <Main /> //
}

export default App
