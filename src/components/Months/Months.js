import React, { useState } from 'react';
import './month.css'
function Months({ updateCron }) {
  const [day, setDay] = useState(1);
  const [time, setTime] = useState('12:00');

  const handleDayChange = (e) => {
    const value = e.target.value;
    setDay(value);
    updateCron(`0 ${time.split(':')[1]} ${time.split(':')[0]} ${value} * *`);
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    updateCron(`0 ${value.split(':')[1]} ${value.split(':')[0]} ${day} * *`);
  };

  return (
    <div>
      <h3 className='selector_title'>В определенный день месяца</h3>
      <div className='timer' style={{display:'flex',flexDirection:'column'}}>
        <input className='month_input' 
          type="number" 
          value={day} 
          onChange={handleDayChange} 
          min="1" 
          max="31"
        />
        <input className='month_input' 
          type="time" 
          value={time} 
          onChange={handleTimeChange} 
        />
      </div>

    </div>
  );
}

export default Months;
