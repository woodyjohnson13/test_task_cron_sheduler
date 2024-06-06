import React, { useState } from 'react';

function Custom({ updateCron }) {
  const [cron, setCron] = useState('');

  const handleCronChange = (e) => {
    const value = e.target.value;
    setCron(value);
    updateCron(value);
  };

  return (
    <div>
      <h3 className='selector_title'>Свой график</h3>
      <div className='timer'>
          <input 
          
          type="text" 
          value={cron} 
          onChange={handleCronChange} 
          placeholder="CRON строка" 
        />
      </div>
      
    </div>
  );
}

export default Custom;
