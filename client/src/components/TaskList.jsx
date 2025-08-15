import React, {useState ,useEffect}from 'react'
import axios from 'axios'
import TaskItem from './TaskItem';

const TaskList = ({reload, triggerRefresh}) => {
	const [list, setList] = useState([]);
		useEffect(() => {
			const getList = async () => {
			const res = await axios.get('http://localhost:3000/tasks');
			setList(res.data);
		};
		getList();
  }, [reload]);

	return (
	<>
		<ul>
			{list.map(task => (
				<TaskItem
					id={task.id}
					title={task.title}
					description={task.description}
					status={task.status}
					triggerRefresh={triggerRefresh}
				/>
			))}
		</ul>
	</>
	);
};

export default TaskList;