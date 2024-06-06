import React from 'react';
import './display.css'
function Display({ cronExpression }) {
  return (
    <div className='main_display'>
      <div className='button_box'>
        <button className='two_buttons' onClick={() => alert(`CRON expression: ${cronExpression}`)}>Сохранить</button>
        <button className='two_buttons' onClick={() => alert('Load functionality not implemented yet')}>Загрузить</button>
      </div>
      <div className='expression'>
        <p>{cronExpression}</p>
      </div>
    </div>
  );
}

export default Display;
