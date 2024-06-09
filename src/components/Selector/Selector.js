import React,{useContext,useEffect} from 'react';
import CronContext from '../../context/CronExpressionContext';
import { CronParser } from '../../utilities/CronParser'; 
import './selector.css';


function Selector({ scheduleType, setScheduleType }) {

  const {cronExpression} = useContext(CronContext);

  useEffect(() => {
    const updateScheduleType = () => {
      if (CronParser.isValidCronExpression(cronExpression)) {
        if (/^(\d{1,2}|\*) (\d{1,2}|\*) (\d{1,2}|\*) (\*|\d{1,2}|\d{1,2}-\d{1,2}) (\*|\d{1,2}|\d{1,2}-\d{1,2}) (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))*$/.test(cronExpression)) {
          setScheduleType('weekly');
        } else if (/^\d{1,2} \d{1,2} \d{1,2} \* \* \*$/.test(cronExpression)) {
          setScheduleType('daily');
        } else if (/^\*\/\d{1,2} \* \* \* \*$/.test(cronExpression)) {
          setScheduleType('minutes');
        } else if (/^0 \d{1,2} \d{1,2} \d{1,2} \* \*$/.test(cronExpression)) {
          setScheduleType('monthly');
        } }
    };

    updateScheduleType();
  }, [cronExpression]);

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
    </div>
  );
}

export default Selector;
