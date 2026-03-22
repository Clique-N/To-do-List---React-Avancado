import AddTaskForm from "./AddTaskForm";
import FilteredList from "./FilteredList";


function TaskList(){
    console.log("re-render TaskList");

    return( 
        <>
            <div>
                <AddTaskForm/>
                <FilteredList/>
            </div>
        </>
    );
}

export default TaskList; 