import React, { useState } from 'react';
import './minutes.css'

function Minutes({ updateCron }) {
  const [minutes, setMinutes] = useState(15);

  const handleMinutesChange = (e) => {
    const value = e.target.value;
    setMinutes(value);
    updateCron(`*/${value} * * * *`);
  };


  function minutes_declination(number) {
    const remainder_ten = number % 10;
    const remainder_hundred = number % 100;

    if (remainder_hundred >= 11 && remainder_hundred <= 14) {
        return "минут";
    } else if (remainder_ten === 1) {
        return "минута";
    } else if (remainder_ten >= 2 && remainder_ten <= 4) {
        return "минуты";
    } else {
        return "минут";
    }
}

  return (
    <div>
      <h3 className='selector_title'>Каждые X минут</h3>
      <div className='timer'>
        <span> Каждые </span>
          <input 
            type="number" 
            value={minutes} 
            onChange={handleMinutesChange} 
            min="1" 
            className='minutes_selector'
          />
        <span> {minutes_declination(minutes)} </span>
      </div>
      
    </div>
  );
}

export default Minutes;
