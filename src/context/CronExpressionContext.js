import React, { createContext, useState } from 'react';

const CrontExpressionContext = createContext();

export const CronProvider = ({ children }) => {
  const [cronExpression, setCronExpression] = useState(' ');

  const updateCronExpression = (newCronExpression) => {
    setCronExpression(newCronExpression);
  };


  return (
    <CrontExpressionContext.Provider value={{ cronExpression, updateCronExpression }}>
      {children}
    </CrontExpressionContext.Provider>
  );
};

export default CrontExpressionContext;
