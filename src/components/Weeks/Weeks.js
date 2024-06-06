import React, { useState } from 'react';
import './weeks.css'
function Weeks({ updateCron }) {
  const [days, setDays] = useState(['MON']);
  const [time, setTime] = useState('12:00');

  const handleDaysChange = (e) => {
    const value = e.target.value;
    setDays(
      Array.from(e.target.selectedOptions, option => option.value)
    );
    updateCron(`0 ${time.split(':')[1]} ${time.split(':')[0]} * * ${value}`);
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    updateCron(`0 ${value.split(':')[1]} ${value.split(':')[0]} * * ${days.join(',')}`);
  };

  return (
    <div>
      <h3 className='selector_title'>По дням недели</h3>
      <div className='timer' style={{display:'flex',flexDirection:'column'}}>
        <select multiple onChange={handleDaysChange}>
          <option value="MON">Понедельник</option>
          <option value="TUE">Вторник</option>
          <option value="WED">Среда</option>
          <option value="THU">Четверг</option>
          <option value="FRI">Пятница</option>
          <option value="SAT">Суббота</option>
          <option value="SUN">Воскресенье</option>
        </select>
        <input
          className='clock' 
          type="time" 
          value={time} 
          onChange={handleTimeChange} 
          style={{marginTop:'1px'}}
        />
      </div>
    </div>
  );
}

export default Weeks;
