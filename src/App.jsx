import TaskList from "./components/TaskList"
import ApiProvider from "./context/ApiContext"
import './css/Style.css';

function App() {
  return (
    <ApiProvider>
      <main>
        <h1>To-do List</h1>
        <TaskList/>
      </main>
    </ApiProvider>
   )
}

export default App

