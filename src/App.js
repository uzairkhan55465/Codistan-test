// App.js
import React, { useState } from 'react';
import Task from './Page/Tasks';
import TaskForm from './Page/TaskForm';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { ...task, id: uuidv4() };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, status) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: status };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const switchTaskStatus = (index) => {
    const task = tasks[index];
    if (!task) return;

    let newStatus;
    switch (task.status) {
      case 'pending':
        newStatus = 'in_progress';
        break;
      case 'in_progress':
        newStatus = 'completed';
        break;
      case 'completed':
        newStatus = 'pending';
        break;
      default:
        break;
    }

    updateTaskStatus(task.id, newStatus);
  };

  console.log(tasks, "tasks")

  return (
    <div className="app container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
      <TaskForm addTask={addTask} />
      <div className="task-list">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Pending</h2>
          {tasks
            .filter((task) => task.status === 'pending')
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                updateStatus={(status) => updateTaskStatus(task.id, status)}
                switchStatus={() => switchTaskStatus(tasks.findIndex((t) => t.id === task.id))}
              />
            ))}
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">In Progress</h2>
          {tasks
            .filter((task) => task.status === 'in_progress')
            .map((task, index) => (
              <Task
                key={task.id}
                task={task}
                updateStatus={(status) => updateTaskStatus(task.id, status)}
                switchStatus={() => switchTaskStatus(tasks.findIndex((t) => t.id === task.id))}
              />
            ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Completed</h2>
          {tasks
            .filter((task) => task.status === 'completed')
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                updateStatus={(status) => updateTaskStatus(task.id, status)}
                switchStatus={() => switchTaskStatus(tasks.findIndex((t) => t.id === task.id))}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
