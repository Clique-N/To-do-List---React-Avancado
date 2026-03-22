import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import '../css/Style.css';

function DeleteTask({id}){

    const {deleteTask} = useContext(ApiContext)

    return (
        <>
            <button className="button" onClick={() => deleteTask(id)}>Apagar tarefa</button>
        </>
    )
}

export default DeleteTask;
