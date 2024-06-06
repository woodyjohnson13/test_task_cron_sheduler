import React, { useState } from 'react';
import './App.css';
import Selector from './components/Selector/Selector';
import Weeks from './components/Weeks/Weeks';
import Days from './components/Days';
import Minutes from './components/Minutes/Minutes';
import Months from './components/Months/Months';
import Custom from './components/Custom';
import Display from './components/Display/Display';

function App() {
  const [scheduleType, setScheduleType] = useState('weekly');
  const [cronExpression, setCronExpression] = useState('');

  const updateCronExpression = (newCron) => {
    setCronExpression(newCron);
  };

  return (
    <div className="App">
      <h1>CRON помошник</h1>
      <div className='selector_and_shedules'>
          <Selector scheduleType={scheduleType} setScheduleType={setScheduleType} />
          <div className='input_div'>
            {scheduleType === 'weekly' && <Weeks updateCron={updateCronExpression} />}
            {scheduleType === 'daily' && <Days updateCron={updateCronExpression} />}
            {scheduleType === 'minutes' && <Minutes updateCron={updateCronExpression} />}
            {scheduleType === 'monthly' && <Months updateCron={updateCronExpression} />}
            {scheduleType === 'custom' && <Custom updateCron={updateCronExpression} />}
          </div>
      </div>
      <Display cronExpression={cronExpression} />
    </div>
  );
}

export default App;
