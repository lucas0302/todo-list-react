export default function Tarefa({terminadas, task, terminarTarefa}) {
    return (
        <li
            className={`tarefa ${terminadas.includes(task) ? "finalizada" : ""}`}
            onClick={() => terminarTarefa(task)}
        >
            <ion-icon name={terminadas.includes(task) ? "checkmark-circle" : "ellipse-outline"} />
            {task}
        </li>
    );
}