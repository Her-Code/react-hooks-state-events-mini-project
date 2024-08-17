// src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete }) => {
  if (!task) return null; // Guard clause to handle undefined tasks
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onDelete(task.id)}>X</button>
    </div>
  );
};

export default Task;
