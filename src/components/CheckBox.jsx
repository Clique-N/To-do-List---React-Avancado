import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import '../css/Style.css';

// Function para acrescentar o style e checkbox de conclusão
function TaskCompleted({task}){

    const {toggleTask} = useContext(ApiContext)

    return(
        <>
            <input className="taskContent" type="checkbox" checked={task.updated} onChange={() => toggleTask(task)}/> <span className={ task.updated ? 'taskCompleted' : ''}> {task.description} </span>  {/* input com tipo de checkbox; onChange, altera o estado quando checkbox está ativa; className checa se está ativo, se sim, puxa o css; {description} puxa a descrição do TaskList.jsx */}
        </>    
    )
}

export default TaskCompleted;