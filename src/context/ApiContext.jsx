import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

const API_URL = // Update the API_URL. EX "https://crudcrud.com/api/.../task"

export default function ApiProvider({children}){

    const [apiTasks, setApiTasks] = useState([]);

    console.log(apiTasks);

    useEffect(() => {

        console.log("Initial GET requested");
        
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setApiTasks(data))
        .catch(error => console.error("Failed to search tasks", error))
    },[])

    function addTask(description){

        console.log("addTask requested");

        const newTask = {description, updated: false}       

        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
        .then(newTask => {
            setApiTasks(prev => [...prev, newTask]);
        })
        .catch(error => console.error("Failed to add task", error))
    }

    function toggleTask(task){

        console.log("toggleTask requested");

        const updatedTask = {description: task.description, updated: !task.updated}

        fetch(`${API_URL}/${task._id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
        })
        .then(() => {
            setApiTasks(prev => prev.map ( item => item._id === task._id ? { ...item, updated: !item.updated }:item))
        })
    }

    function deleteTask(id) {

        console.log("deleteTask requested");        

        fetch(`${API_URL}/${id}`,{
            method: 'DELETE'
        })
        .then(()=> {
            setApiTasks(apiTasks.filter( apiTask=> apiTask._id !== id))
        })
        .catch(error => console.error("Failed to delete task", error))
    } 

    return(
        <ApiContext.Provider value= {{ apiTasks, addTask, toggleTask, deleteTask }}>
            {children}
        </ApiContext.Provider>
    )
}
