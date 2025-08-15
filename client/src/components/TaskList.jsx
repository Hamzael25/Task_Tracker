import React, {useState ,useEffect}from 'react'
import axios from 'axios'
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';

const TaskList = ({reload, triggerRefresh}) => {
	const [list, setList] = useState([]);
	const [filter, setFilter] = useState('all');
		useEffect(() => {
			const getList = async () => {
			const res = await axios.get('http://localhost:3000/tasks');
			setList(res.data);
		};
		getList();
  }, [reload]);

	const filteredList = list.filter(task => {
		if (filter === 'all') 
			return true;
		return task.status === filter;
	});

	return (
	<>
		<TaskFilter onFilterChange={setFilter} />
		<ul>
			{filteredList.map(task => (
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