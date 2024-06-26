export class CronParser {

    static regexArray = [
      /^(\d{1,2}|\*) (\d{1,2}|\*) (\d{1,2}|\*) (\*|\d{1,2}|\d{1,2}-\d{1,2}) (\*|\d{1,2}|\d{1,2}-\d{1,2}) (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))*$/, //Weeks
      /^\d{1,2} \d{1,2} \d{1,2} \* \* \*$/, //Dayily
      /^\*\/\d{1,2} \* \* \* \*$/,//Minutes
      /^0 \d{1,2} \d{1,2} \d{1,2} \* \*$/ //Days of the month
    ];


    static isValidCronExpression(cronExpression) {
  
      for (let regex of CronParser.regexArray) {
        if (regex.test(cronExpression)) {
          return true; 
        }
      }
      return false; 
    }
  
    static parseDaysOfWeek(cronExpression) {
      const parts = cronExpression.split(' ');
      const hour = parts[2];
      const minute = parts[1];
      const dayOfWeek = parts[5];
  
      const daysOfWeekTranslated = dayOfWeek.split(',').map(day => {
        switch (day) {
          case 'MON':
            return 'понедельникам';
          case 'TUE':
            return 'вторникам';
          case 'WED':
            return 'средам';
          case 'THU':
            return 'четвергам';
          case 'FRI':
            return 'пятницам';
          case 'SAT':
            return 'субботам';
          case 'SUN':
            return 'воскресеньям';
          default:
            return '';
        }
      });
      return `В ${hour.padStart(2, '0')}:${minute.padStart(2, '0')} по ${daysOfWeekTranslated.join(', ')}`;
    }
  
    static parseDaily(cronExpression) {
      const parts = cronExpression.split(' ');
      const hour = parts[2];
      const minute = parts[1];
      return `Каждый день в ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
    }

    static parseEveryXMinutes(cronExpression) {
        const parts = cronExpression.split(' ');
        const minuteInterval = parts[0].replace('*/', '');
        return `Каждые ${minuteInterval} минут`;
    }

    static parseSpecificDayOfMonth(cronExpression) {
        const parts = cronExpression.split(' ');
        const hour = parts[2];
        const minute = parts[1];
        const dayOfMonth = parts[3];
        return `В ${hour.padStart(2, '0')}:${minute.padStart(2, '0')} на ${dayOfMonth} день месяца`;
    }
    
    static cronExpressionToHumanReadable(cronExpression) {
      if (!CronParser.isValidCronExpression(cronExpression)) {
          return 'Невалидное CRON выражение';
      }
  
      if (CronParser.regexArray[0].test(cronExpression)) {
          return CronParser.parseDaysOfWeek(cronExpression);
      } else if (CronParser.regexArray[2].test(cronExpression)) {
          return CronParser.parseEveryXMinutes(cronExpression);
      } else if (CronParser.regexArray[3].test(cronExpression)) {
          return CronParser.parseSpecificDayOfMonth(cronExpression);
      } else if (CronParser.regexArray[1].test(cronExpression)) {
          return CronParser.parseDaily(cronExpression);
      } else {
          return 'Невалидное CRON выражение';
      }
  }
  
}
  