import './App.css';
import Mensagem from './components/mensagem.jsx';
import MeuAvatar  from './components/meuAvatar.jsx';
import imagem from "./assets/img/imagem.jpg";

function App() {

  return (
  <>
  <MeuAvatar
  nome = 'Maomao'
  idade={17}
  foto= {imagem}
  estilo='Pop'
  disciplina='Matematica'
  />
  </>
  )
}
export default App
