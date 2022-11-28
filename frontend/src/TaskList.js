import React from 'react';
import { useEffect, useState } from 'react';
import TaskListItem from './TaskListItem';
import './TaskList.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
        const response = await fetch(`http://localhost:4040/api/v1/tasks`)
        const data = await response.json();
        console.log(data);
        setTasks(data);
    }
    fetchTasks();
  })
    return (
    <>
      <h1>Tasks</h1>
      <ul className="task-list">
        {tasks.map(task => <TaskListItem
          key={task.id}
          id={task.id}
          name={task.name}
        />)}
      </ul>
    </>
  )
};

export default TaskList;