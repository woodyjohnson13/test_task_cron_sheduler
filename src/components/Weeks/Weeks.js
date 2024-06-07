import React, { useState, useEffect } from 'react';
import './weeks.css';

function Weeks({ updateCron }) {
  const [selectedDays, setSelectedDays] = useState(['MON']);
  const [time, setTime] = useState('12:00');

  useEffect(() => {
    updateCron(`0 ${time.split(':')[1]} ${time.split(':')[0]} * * ${selectedDays.join(',')}`);
  }, [selectedDays, time, updateCron]);

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (selectedDays.includes(value)) {
      setSelectedDays(selectedDays.filter(day => day !== value));
    } else {
      setSelectedDays([...selectedDays, value]);
    }
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
  };

  return (
    <div>
      <h3 className='selector_title'>По дням недели</h3>
      <div className='timer' style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='days_selector'>
          <label>
            <input type="checkbox" value="MON" checked={selectedDays.includes("MON")} onChange={handleDayChange} />
            Понедельник
          </label>
          <label>
            <input type="checkbox" value="TUE" checked={selectedDays.includes("TUE")} onChange={handleDayChange} />
            Вторник
          </label>
          <label>
            <input type="checkbox" value="WED" checked={selectedDays.includes("WED")} onChange={handleDayChange} />
            Среда
          </label>
          <label>
            <input type="checkbox" value="THU" checked={selectedDays.includes("THU")} onChange={handleDayChange} />
            Четверг
          </label>
          <label>
            <input type="checkbox" value="FRI" checked={selectedDays.includes("FRI")} onChange={handleDayChange} />
            Пятница
          </label>
          <label>
            <input type="checkbox" value="SAT" checked={selectedDays.includes("SAT")} onChange={handleDayChange} />
            Суббота
          </label>
          <label>
            <input type="checkbox" value="SUN" checked={selectedDays.includes("SUN")} onChange={handleDayChange} />
            Воскресенье
          </label>
        </div>
        <input
          className='clock'
          type="time"
          value={time}
          onChange={handleTimeChange}
          style={{ marginTop: '1px' }}
        />
      </div>
    </div>
  );
}

export default Weeks;
