import React, {useState ,useEffect}from 'react'
import axios from 'axios'

const TaskList = () => {
	const [list, setList] = useState([]);
		useEffect(() => {
			const getList = async () => {
			const res = await axios.get('http://localhost:3000/tasks');
			setList(res.data);
		};
		getList();
  }, []);

	return (
	<>
		<ul>
			{list.map(task => (
				<li key={task.id}>
					<strong>Title: </strong> - 
					<strong> Description: </strong> - 
					<strong> Status: </strong>
				</li>
			))}
		</ul>
	</>
	);
};

export default TaskList;