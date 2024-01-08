import { useState } from "react";
import logo from "./assets/img/logo.png";

function App() {
  const [listaTarefas, setListaTarefas] = useState(["Jogar Cs2", "Assistir naruto", "Comprar café"]);
  const [terminadas, setTerminadas] = useState([]);

  function adicionarTarefa() {
    const novaTarefa = prompt("add sua nova tarefa: ");
    //const novaListaTarefas = [...listatarefas]        // primeira forma de fazer
    // novaListaTarefas.push(novaTarefa);
    setListaTarefas([...listaTarefas, novaTarefa]);     //segunda forma de fazer
  }

  function terminarTarefa(i) {
    const novoArry = [...terminadas, listaTarefas[i]]
    setTerminadas(novoArry);

    alert(`Agora so falta ${listaTarefas.length - novoArry.length} tarefas`);

  }

  return (

    <div className="conteudo">
      <img src={logo} alt="logo"></img>

      <div className="adicionar-tarefa">
        <input type="text" placeholder="Digite a tarefa..."></input>
        <button className="botao-adicionar" onClick={adicionarTarefa}>+</button>
      </div>

      <ul className="lista-tarefas">

        {listaTarefas.map((task, index) => (
          <li
            key={task}
            className={`tarefa ${terminadas.includes(task) ? "finalizada" : ""}`}
            onClick={terminadas.includes(task) ? null : () => terminarTarefa(index)}
            
          >
            <ion-icon name={terminadas.includes(task) ? "checkmark-circle" : "ellipse-outline"} />
            {task}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
