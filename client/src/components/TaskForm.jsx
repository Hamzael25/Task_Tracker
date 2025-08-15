import React, {useState} from 'react';
import axios from 'axios';

const TaskForm = ({onTaskAdded}) => { 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');


	const handleSubmit = async (e) => {
    e.preventDefault();
		await axios.post('http://localhost:3000/tasks', {
			title,
			description,
			status
		});
		setTitle('');
		setDescription('');
		setStatus('pending');

		onTaskAdded();
  };


	return (
		<form onSubmit={handleSubmit}>

      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      
			<select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">
				Add Task
			</button>

    </form>
	);

} 

export default TaskForm;