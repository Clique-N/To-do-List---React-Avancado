import { useInput } from "../hooks/UseInput"
import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import '../css/Style.css';

function AddTaskForm(){
    
    const {addTask} = useContext(ApiContext)
    const {taskValue, onChange, reset} = useInput()
    
    const handleSubmit = (e) => {
    e.preventDefault ();
    if(taskValue.trim () === '') return;

    addTask(taskValue); //Importante chamar a função, pois sem ela o submit não tem para onde enviar o input que o usuário fez
    reset()
    }    

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input className="input" type="text" placeholder="Descrição" value={taskValue} 
                onChange={onChange}/>
                <button className="button" type="submit">Adicionar tarefa</button>                
            </div>
        </form>
    )
}


export default AddTaskForm;

