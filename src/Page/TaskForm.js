import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask({ name: taskName, status: 'pending' });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="px-2 py-1 mr-2 border border-gray-300 rounded"
      />
      <button type="submit" className="px-3 py-1 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
