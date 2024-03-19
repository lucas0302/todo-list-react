import { useState } from "react";
import styled from "styled-components";

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
        <ContainerAdicionar>
            <ImputTarefa 
                type="text" 
                placeholder="Digite a tarefa..." 
                value={textoInput} 
                onChange={(evento) => setTextImput(evento.target.value)}
                onKeyDown={handleKeyDown}
            />
            <BotaoMais onClick={adicionarTarefa}>+</BotaoMais>
        </ContainerAdicionar>
    );
}

const ContainerAdicionar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const ImputTarefa = styled.input`
    width: calc(100% - 10px);
    padding: 20px;
    border: none;
    background-color: #f3f3f3;
    color: #555;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    font-size: 18px;
    &::placeholder {
    color: #aaa;
    }
`
const BotaoMais = styled.button`
    background-color: #21c0a8;
    border: none;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    color: white;
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: all ease 0.15s;
    &:hover {
    background-color: #56daaf;
    }
`
