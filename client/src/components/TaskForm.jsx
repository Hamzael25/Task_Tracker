import React, {useState} from 'react';
import axios from 'axios';

const TaskForm = ({onTaskAdded}) => { 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			await axios.post('http://localhost:3000/tasks', {
				title,
				description,
				status
			});
			setTitle('');
			setDescription('');
			setStatus('pending');

			onTaskAdded();
		} catch (err) {
			console.error(err);
			setError('Failed to add task.');
		} finally {
			setLoading(false);
		}
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
				{loading ? 'Adding...' : 'Add Task'}
			</button>

			{error && <p style={{color: 'red'}}>{error}</p>}
			
    </form>
	);

} 

export default TaskForm;