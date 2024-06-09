import React, { useState, useEffect,useContext } from 'react';
import CronContext from '../../context/CronExpressionContext';
import './weeks.css';

function Weeks() {
  const [selectedDays, setSelectedDays] = useState(['MON']);
  const [time, setTime] = useState('12:00');
  const {cronExpression,updateCronExpression} = useContext(CronContext);

  useEffect(() => {
    if (cronExpression) {
      const parts = cronExpression.split(' ');
      if (parts.length >= 6) {
        const cronTime = parts[2] + ':' + parts[1]; 
        const cronSelectedDays = parts[5].split(',');
      
        setTime(cronTime);
        setSelectedDays(cronSelectedDays);
      }
    }
  }, [cronExpression,updateCronExpression]);


  useEffect(() => {
        setTime('12:00');
        setSelectedDays(['MON']);
        updateCronExpression('0 00 12 * * MON')
  }, []);

  
  
  const handleDayChange = (e) => {
    const value = e.target.value;
    let newSelectedDays;
    if (selectedDays.includes(value)) {
      newSelectedDays = selectedDays.filter(day => day !== value);
    } else {
      if (selectedDays[0]=="") {
        newSelectedDays = [value];
      } else {
        newSelectedDays = [...selectedDays, value];
      }
    }
    setSelectedDays(newSelectedDays);
    updateCronExpression(`0 ${time.split(':')[1]} ${time.split(':')[0]} * * ${newSelectedDays.join(',')}`);
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    updateCronExpression(`0 ${value.split(':')[1]} ${value.split(':')[0]} * * ${selectedDays.join(',')}`);
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
