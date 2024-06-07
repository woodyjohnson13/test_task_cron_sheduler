import React from 'react';
import './selector.css';
function Selector({ scheduleType, setScheduleType }) {
  return (
    <div className='selector'>
      <h3 className='selector_title'>График</h3>
      <label>
        <input 
          type="radio" 
          value="weekly"
          id="week" 
          checked={scheduleType === 'weekly'} 
          onChange={() => setScheduleType('weekly')} 
        />
        <span>Дни недели</span>
      </label>

      <label>
        <input 
          type="radio" 
          value="daily" 
          checked={scheduleType === 'daily'} 
          onChange={() => setScheduleType('daily')} 
        />
        <span>Ежедневно</span>
      </label>

      <label>
        <input 
          type="radio" 
          value="minutes" 
          checked={scheduleType === 'minutes'} 
          onChange={() => setScheduleType('minutes')} 
        />
        <span>Минуты</span>
      </label>
      <label>
        <input 
          type="radio" 
          value="monthly" 
          checked={scheduleType === 'monthly'} 
          onChange={() => setScheduleType('monthly')} 
        />
        <span>Месяцы</span>
      </label>
      <label>
        <input 
          type="radio" 
          value="custom" 
          checked={scheduleType === 'custom'} 
          onChange={() => setScheduleType('custom')} 
        />
        <span>Свой график</span>
      </label>
    </div>
  );
}

export default Selector;
