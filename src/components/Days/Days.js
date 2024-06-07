import React, { useState } from 'react';

function Days({ updateCron }) {
  const [time, setTime] = useState('12:00');

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    updateCron(`0 ${value.split(':')[1]} ${value.split(':')[0]} * * *`);
  };

  return (
    <div>
      <h3 className='selector_title'>Ежедневно</h3>
      <div className='timer'>
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
