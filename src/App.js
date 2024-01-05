import { useState } from "react";
import logo from "./assets/img/logo.png";

function App() {
  const [listatarefas, setListaTarefas] = useState(["Jogar Cs2", "Assistir naruto", "Comprar café"]);

  function adicionarTarefa(){
      const novaTarefa = prompt("add sua nova tarefa: ");
      const novaListaTarefas = [...listatarefas, novaTarefa]
      // novaListaTarefas.push(novaTarefa);
      setListaTarefas(novaListaTarefas);
  }
  return (

    <div className="conteudo">
      <img src={logo} alt="logo"></img>

      <div className="adicionar-tarefa">
        <input type="text" placeholder="Digite a tarefa..."></input>
        <button className="botao-adicionar" onClick={adicionarTarefa}>+</button>
      </div>

      <ul className="lista-tarefas">

        {listatarefas.map((task) => (
          <li key={task} className={`tarefa`}>
            <ion-icon name="ellipse-outline"></ion-icon>
            {task}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
