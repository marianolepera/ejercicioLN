import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Articulos from './components/Articulos';
import ModuloContenedor from './components/ModuloContenedor';
import Notas from './components/Notas';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ModuloContenedor></ModuloContenedor>
      <Articulos></Articulos>
      <Notas></Notas> 
      
      
    </div>
  );
}

export default App;
