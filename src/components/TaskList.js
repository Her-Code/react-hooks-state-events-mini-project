// src/components/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState(/* initial tasks */);

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <TaskList tasks={tasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
};

export default App;


