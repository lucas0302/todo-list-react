import AdicionarTarefa from "./AdicionarTarefa/AdicionarTarefa";
import ListaTarefas from "./ListaTarefas";
import {useState} from "react";
import logo from "../assets/img/logo.png"
export default function ToDoMain() {
    const [listaTarefas, setListaTarefas] = useState(["Jogar Cs2", "Assistir naruto", "Comprar café"]);
    
    return (
        <>
            <img src={logo} alt="logo"></img>
            <AdicionarTarefa listaTarefas={listaTarefas} setListaTarefas={setListaTarefas}/>
            <ListaTarefas listaTarefas={listaTarefas}/>
        </>
    );
}