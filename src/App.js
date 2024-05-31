import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import EditTaskModal from './components/EditTaskModal';
import './App.css';

const App = () => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList onEdit={setEditingTask} />
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default App;
