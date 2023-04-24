import React from 'react';
import './Reminder.css'
const Reminder = ({ index, task, deadline, deleteReminder }) => {
  return (
    <div className="reminder">
      <div className="reminder-task">{task}</div>
      <div className="reminder-deadline">{deadline}</div>
      <button className="reminder-delete" onClick={() => deleteReminder(index)}>Delete</button>
    </div>
  );
};

export default Reminder;
