import logo from "../assets/img/logo.png"
function App() {
  return (

      <div className="conteudo">
        <img src={logo} alt="logo"></img>

        <div className="adicionar-tarefa">
          <input type="text" placeholder="Digite a tarefa..."></input>
          <button className="botao-adicionar">+</button>
        </div>

        <ul className="lista-tarefas">
          <li className={`tarefa`}>
            <ion-icon name="ellipse-outline"></ion-icon>
            Jogar Cs2
          </li>
          <li className={`tarefa`}>
            <ion-icon name="ellipse-outline"></ion-icon>
            Assistir naruto
          </li>
          <li className={`tarefa`}>
            <ion-icon name="ellipse-outline"></ion-icon>
            Comprar cafe
          </li>
        </ul>

      </div>
  );
}

export default App;
