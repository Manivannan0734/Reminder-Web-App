import React, { useState } from 'react';
import './Reminder.css'

const ReminderForm = ({ addReminder }) => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder({
      task,
      deadline
    });
    setTask('');
    setDeadline('');
  };

  return (
    <div className='whole' >
    <form className="reminder-form" onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <label htmlFor="deadline">Deadline:</label>
      <input
        type="datetime-local"
        id="deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button type="submit" className="reminder-add">Add Reminder</button>
    </form>
    </div>
  );
};

export default ReminderForm;
