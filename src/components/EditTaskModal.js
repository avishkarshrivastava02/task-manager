import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasks/tasksSlice';

const EditTaskModal = ({ task, onClose }) => {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, text }));
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTaskModal;
