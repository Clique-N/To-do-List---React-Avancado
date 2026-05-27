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

    addTask(taskValue);
    reset()
    }    

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input className="input" type="text" placeholder="Description" value={taskValue} 
                onChange={onChange}/>
                <button className="button" type="submit">Add new task</button>                
            </div>
        </form>
    )
}


export default AddTaskForm;

