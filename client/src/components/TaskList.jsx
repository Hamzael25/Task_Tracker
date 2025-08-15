import React, {useState ,useEffect}from 'react'
import axios from 'axios'
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';

const TaskList = ({reload, triggerRefresh}) => {
	const [list, setList] = useState([]);
	const [filter, setFilter] = useState('all');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getList = async () => {
			setLoading(true);
			setError(null);
			try {
				const res = await axios.get('http://localhost:3000/tasks');
				setList(res.data);
			} catch (err) {
				console.error(err);
				setError('Failed to load tasks.');
			} finally {
				setLoading(false);
			}
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
		{loading && <p>Loading tasks...</p>}
		{error && <p style={{color: 'red'}}>{error}</p>}
		{!loading && !error && (
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
		)}
	</>
	);
};

export default TaskList;