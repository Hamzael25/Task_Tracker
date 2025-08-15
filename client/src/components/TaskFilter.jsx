import React from 'react';

const TaskFilter = ({ onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="all">All</option>
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default TaskFilter;