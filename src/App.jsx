import MeuComponente  from "./components/MeuComponente";
function App() {
  return (
    <div>
      <h1>Olá mundo</h1>
      <MeuComponente/>
      <MeuComponente/>
      <MeuBotao conteudo='enviar'/>
      <MeuBotao conteudo='Apagar'/>
      <MeuBotao conteudo='Limpar'/>
      <MeuBotao conteudo='Salvar'/>
    </div>
   
  )
}
//conteudo é uma var qualquer
//props é o parametro 
// o react ajuda a reutilizar códigos através de componentes
function MeuBotao(props){
  return(
    <button>{props.conteudo}</button>
  )
}



export default App
