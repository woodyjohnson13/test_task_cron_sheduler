import React, { useState  } from 'react';
import './App.css';
import Selector from './components/Selector/Selector';
import Weeks from './components/Weeks/Weeks';
import Days from './components/Days/Days';
import Minutes from './components/Minutes/Minutes';
import Months from './components/Months/Months';
import Display from './components/Display/Display';

function App() {
  const [scheduleType, setScheduleType] = useState('weekly');
 
  return (
    <div className="App">
      <h1>CRON помощник</h1>
      <div className='selector_and_shedules'>
          <Selector scheduleType={scheduleType} setScheduleType={setScheduleType} />
          <div className='input_div'>
            {scheduleType === 'weekly' && <Weeks/>}
            {scheduleType === 'daily' && <Days/>}
            {scheduleType === 'minutes' && <Minutes/>}
            {scheduleType === 'monthly' && <Months/>}
          </div>
      </div>
      <Display />
    </div>
  );
}

export default App;
