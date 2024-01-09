import { useState } from "react";

export default function AdicionarTarefa({ listaTarefas, setListaTarefas }) {
    const [textoInput, setTextImput] = useState("");

    function adicionarTarefa() {
        // Verifica se o textoInput não é apenas um número ou string vazia
        if (textoInput !== "" && isNaN(textoInput)) {
            const novoArray = [...listaTarefas, textoInput];
            setListaTarefas(novoArray);
            setTextImput("");
        } else {
            alert("Por favor, insira uma tarefa válida!");
        }
    }

    function handleKeyDown(evento) {
        if (evento.key === 'Enter') {
            evento.preventDefault();  // Impede o comportamento padrão da tecla Enter
            adicionarTarefa();
        }
    }

    return (
        <div className="adicionar-tarefa">
            <input 
                type="text" 
                placeholder="Digite a tarefa..." 
                value={textoInput} 
                onChange={(evento) => setTextImput(evento.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={adicionarTarefa} className="botao-adicionar">+</button>
        </div>
    );
}
