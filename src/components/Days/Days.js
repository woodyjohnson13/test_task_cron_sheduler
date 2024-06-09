import React, { useState,useContext,useEffect  } from 'react';
import CronContext from '../../context/CronExpressionContext';

function Days() {
  const [time, setTime] = useState('12:00');
  const {cronExpression,updateCronExpression} = useContext(CronContext);

  useEffect(() => {
    const parts = cronExpression.split(' ');
    const hour = parts[2];
    const minute = parts[1];
    if (hour) {
      setTime(`${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`);
    }
  }, [cronExpression]);

  useEffect(() => {
      setTime(`12:00`);
      updateCronExpression('0 00 12 * * *')
    
  }, []);



  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    updateCronExpression(`0 ${value.split(':')[1]} ${value.split(':')[0]} * * *`);
  };

  return (
    <div>
      <h3 className='selector_title'>Ежедневно</h3>
      <div className='timer'>
        <p style={{fontSize:'15px'}}>В</p>
        <input 
          type="time" 
          value={time} 
          onChange={handleTimeChange}
          className='clock' 
        />
      </div>
     
    </div>
  );
}

export default Days;
