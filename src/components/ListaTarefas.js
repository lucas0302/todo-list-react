import styled from "styled-components";
import Tarefa from "./Tarefa";
import {useState} from "react";
export default function ListaTarefas({listaTarefas}) {
    const [terminadas, setTerminadas] = useState([]);
    
    function terminarTarefa(tarefaTerminadas) {
        const novoArry = [...terminadas, tarefaTerminadas]
        setTerminadas(novoArry);
        alert(`Agora so falta ${listaTarefas.length - novoArry.length} tarefas`);
    }

    return (
        <ContainerLista>
            {listaTarefas.map((task) => (
                <Tarefa key={Tarefa} terminarTarefa={terminarTarefa} task={task} terminadas={terminadas}/>
            ))}
        </ContainerLista>
    );
}

const ContainerLista = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: 9px;
    overflow: hidden;
`