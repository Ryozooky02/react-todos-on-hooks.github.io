import '../App/App.scss';
import Header from '../Header/Header';
import TaskDone from '../TaskDone/TaskDone';
import Tasks from '../Tasks/Tasks';
import { createContext, useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

export const AppContext = createContext({});

function App() {

const [tasks, setTasks] = useState([]);
const [taskIsDone, setTaskIsDone] = useState([]);

// Запросы на db.json server
useEffect(() => {
  try {
    async function FetchData() {
      const [tasksRes, doneRes] = await Promise.all([
        axios.get('http://localhost:3001/tasks'),
        axios.get('http://localhost:3001/tasksDone')
      ])
      setTasks(tasksRes.data);
      setTaskIsDone(doneRes.data);
    }
    FetchData();
  } catch (error) {
    console.log(error);
  }
}, [])
// Добавление задачи:
const onAddTask = useCallback((newTask) => {
  setTasks([...tasks, newTask]);
}, [tasks]) 


// Удаление задачи:
const onDeleteTask = useCallback((taskID) => {
    try { 
      axios.delete(`http://localhost:3001/tasks/${taskID}`);
      setTasks(prev => prev.filter(task => task.id !== taskID))
  } catch (error) {
    console.error(error);
}
}, [setTasks]) 


  return (
    <AppContext.Provider value={{

      tasks,
      onAddTask,
      onDeleteTask,
      taskIsDone,
      setTaskIsDone
      
      }}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={
          <Tasks/>
        }
        
        />
        <Route path="/done" element={
          <TaskDone />
        }
        />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
