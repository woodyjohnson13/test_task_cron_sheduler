import React, { useState,useContext,useEffect } from 'react';
import CronContext from '../../context/CronExpressionContext';
import './month.css'


function Months() {
  const [day, setDay] = useState(1);
  const [time, setTime] = useState('12:00');
  const {cronExpression,updateCronExpression} = useContext(CronContext);


  useEffect(() => {
    const parts = cronExpression.split(' ');
    if (parts.length > 3) {
      setDay(parts[3]);
      setTime(`${parts[2].padStart(2, '0')}:${parts[1].padStart(2, '0')}`);
    }
  }, [cronExpression]);


  const handleDayChange = (e) => {
    const value = e.target.value;
    setDay(value);
    updateCronExpression(`0 ${time.split(':')[1]} ${time.split(':')[0]} ${value} * *`);
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    updateCronExpression(`0 ${value.split(':')[1]} ${value.split(':')[0]} ${day} * *`);
  };

  return (
    <div>
      <h3 className='selector_title'>В определенный день месяца</h3>
      <div className='timer' style={{display:'flex',flexDirection:'column'}}>
        <div className='time_and_day'>
          <p>На</p>
          <input className='month_input' 
            type="number" 
            value={day} 
            onChange={handleDayChange} 
            min="1" 
            max="31"
            style={{width:'35px'}}
          />
          <p>день в</p>
          <input className='month_input' 
            type="time" 
            value={time} 
            onChange={handleTimeChange} 
          />

        </div>

        <div className='time_and_day'>
        </div>
      </div>

    </div>
  );
}

export default Months;
