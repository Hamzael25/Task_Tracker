import React from 'react';
import axios from 'axios';

const TaskItem = ({ id, title, description, status, triggerRefresh }) => { 

  const updateTask = async () => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
			title,
      description,
      status: status === 'pending' ? 'completed' : 'pending'
    });
		triggerRefresh();
  };

  const deleteTask = async () => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
		triggerRefresh();
  };

	return ( 
		<li key={id}>
      <strong>Title: </strong>{title} - 
      <strong> Description: </strong>{description ? description : "(none) "} - 
      <strong> Status: </strong>({status})
      <button onClick={updateTask}>Update Task</button>
      <button onClick={deleteTask}>Delete Task</button>
    </li>

		);

} 

export default TaskItem;