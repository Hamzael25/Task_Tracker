import { useState } from 'react';
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
	const [reload, setReload] = useState(false);

	const refresh = () => setReload(!reload);

  return (
    <>
			<TaskForm onTaskAdded={refresh}/>
      <TaskList reload={reload}/>
    </>
  )
}

export default App
