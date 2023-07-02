import React, { useState } from 'react';
import './App.css';

import Topo from './Componentes/Topo';
import Banner from './Componentes/Banner';
import Sobre from './Componentes/Sobre';
import Contato from './Componentes/Contato';
import Portifolio from './Componentes/Portifolio';

function App() {
  const [TemaEscuro, setTemaEscuro] = useState(false);

  const alterarTema = () => {
    setTemaEscuro(!TemaEscuro)
  }

  return (
    <div className="App">
          <Topo alterarTema={alterarTema} TemaEscuro={TemaEscuro} />
          <Banner TemaEscuro={TemaEscuro} />
          <Sobre TemaEscuro={TemaEscuro} />
          <Portifolio TemaEscuro={TemaEscuro} />
          <Contato TemaEscuro={TemaEscuro} />
    </div>
  );
}

export default App;

