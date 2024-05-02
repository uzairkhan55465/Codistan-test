import React from 'react';

const Task = ({ task, updateStatus, switchStatus }) => {
    const handleChangeStatus = (e) => {
        updateStatus(e.target.value);
    };

    return (
        <div className="task bg-gray-100 p-4 mb-4 rounded-lg flex justify-between">
            <p className='flex'> <span className="font-bold ps-2 pe-2">Task Name:</span>{task.name}</p>
            {task.status !== 'completed' && (
                <select
                    className="mt-2 px-2 py-1 border border-gray-300 rounded"
                    value={task.status}
                    onChange={handleChangeStatus}
                >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            )}
            {task.status !== 'completed' && (
                <button className="ml-4 px-2 py-1 bg-blue-500 text-white rounded" onClick={switchStatus}>
                    Switch Status
                </button>
            )}
        </div>
    );
};

export default Task;
