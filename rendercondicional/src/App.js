import {React, useState} from "react";

function App() {

  const [valor,setvalor] = useState(1)

  return (
    <div className="App">
      {valor === 1 && //o conteudo só sera renderizado se a condicional for verdadeira
        <h1>estou estudando</h1>
      }

      <h2>react</h2>
    </div>
  );
}

export default App;
