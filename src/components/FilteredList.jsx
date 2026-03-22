import { useState, useContext, useMemo } from "react";
import { ApiContext } from "../context/ApiContext";
import TaskCompleted from "./CheckBox";
import DeleteTask from "./DeleteTask";
import '../css/Style.css';

export default function FilteredList(){

    const { apiTasks } = useContext(ApiContext)

    const [filter, setFilter] = useState("all");

    const filteredTasks = useMemo(() => {
        return apiTasks.filter(task => {
        if (filter === "done") return task.updated;
        if (filter === "pending") return !task.updated; 
        return true;
        })
    }, [apiTasks, filter]);

    return(
        <div>
            <select className="select" name={filteredTasks} value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option className="taskItem" value="all">Todas as tarefas</option>
                <option className="taskItem" value="pending">Tarefas pendentes</option>
                <option className="taskItem" value="done">Tarefas concluídas</option>
            </select>
            {filteredTasks.map((task)=>(
                <div key={task._id}>
                    <div>
                        <TaskCompleted task={task}/>
                        <DeleteTask id={task._id}/>
                    </div>
                </div>   
            ))}
        </div>
    )
}