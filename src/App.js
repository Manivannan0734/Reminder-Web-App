import React, { useState, useEffect } from 'react';
import Reminder from './Components/Reminder';
import ReminderForm from './Components/ReminderForm';
import Tone from './Components/Tone.mp3';

const App = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      reminders.forEach((reminder) => {
        const deadlineTime = new Date(reminder.deadline).getTime();
        if (currentTime >= deadlineTime && !reminder.isPlayed) {
          const audio = new Audio(Tone);
          audio.play();
          reminder.isPlayed = true;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [reminders]);

  const addReminder = (reminder) => {
    setReminders([...reminders, { ...reminder, isPlayed: false }]);
  };

  const deleteReminder = (index) => {
    const newReminders = [...reminders];
    newReminders.splice(index, 1);
    setReminders(newReminders);
  };

  return (
    <div className="App">
      
      <ReminderForm addReminder={addReminder} />
      {reminders.map((reminder, index) => (
        <Reminder
          key={index}
          index={index}
          task={reminder.task}
          deadline={reminder.deadline}
          deleteReminder={deleteReminder}
        />
      ))}
    </div>
  );
};

export default App;
