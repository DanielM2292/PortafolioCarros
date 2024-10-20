import { useState } from 'react';
import PaginaPrincipal from './PaginaPrincipal';
import Navbar from './components/Navbar';
import PaginaEntrada from './components/PaginaEntrada';
import './App.css';

function App() {
  const [pagina, setPagina] = useState('entrada');
  const [modeloSeleccionado, setModeloSeleccionado] = useState(null);

  const handleClickHome = () => {
    setPagina('entrada');
    setModeloSeleccionado(null);
  };

  const handleClickModelo = (modelo) => {
    setModeloSeleccionado(modelo);
    setPagina('principal');
  };

  return (
    <div className='App'>
      <Navbar handleClickModelo={handleClickModelo} handleClickHome={handleClickHome} />
      {pagina === 'entrada' && <PaginaEntrada />}
      {pagina === 'principal' && <PaginaPrincipal modeloSeleccionado={modeloSeleccionado} />}
    </div>
  )
}

export default App;
